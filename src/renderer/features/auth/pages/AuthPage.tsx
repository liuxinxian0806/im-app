import React, { useState } from "react";
import { authService } from "../../../services/authService";
import { useAuthStore } from "../../../store/useAuthStore";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";

type AuthMode = "login" | "reg";

export const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [smsSent, setSmsSent] = useState(false);
  const [nickname, setNickname] = useState("");

  const { setAuth } = useAuthStore();

  const handleSendSms = async () => {
    if (!phone) { setError("请输入手机号"); return; }
    setLoading(true);
    setError(null);
    try {
      const res = await authService.sendSmsCode({ phone, type: "login" });
      if (res.code === 200) setSmsSent(true); else setError(res.msg);
    } catch (err) { setError("发送失败"); }
    finally { setLoading(false); }
  };

  const handleLogin = async () => {
    if (!code) { setError("reg_error: 请输入验证码"); return; }
    setLoading(true);
    setError(null);
    try {
      const res = await authService.loginWithCode(phone, code);
      if (res.code === 200 && res.data) {
        setAuth({
          userId: res.data.userId,
          nickname: res.data.nickname,
          avatar: res.data.avatar,
          phone: res.data.phone,
        }, res.data.access_token);
      } else { setError(res.msg); }
    } catch (err) { setError("登录失败"); }
    finally { setLoading(false); }
  };

  const handleRegister = async () => {
    if (!nickname) { setError("请输入昵称"); return; }
    setLoading(true);
    setError(null);
    try {
      const res = await authService.registerUser({
        phone, code, nickname, avatar: "1", province: "山东省", city: "青岛市"
      });
      if (res.code === 200) { setMode("login"); setPhone(phone); setSmsSent(true); }
      else setError(res.msg);
    } catch (err) { 
        setError("注册失败"); 
    }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-black">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">{mode === "login" ? "欢迎回来" : "创建账号"}</h1>
          <p className="text-gray-500 mt-2">{mode === "login" ? "请输入手机号登录" : "填写信息完成注册"}</p>
        </div>
        <div className="space-y-4">
          {!smsSent ? (
            <>
              <Input label="手机号" placeholder="请输入您的手机号" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <Button className="w-full" onClick={handleSendSms} disabled={loading}>获取验证码</Button>
            </>
          ) : (
            <>
              <Input label="验证码" placeholder="请输入验证码" value={code} onChange={(e) => setCode(e.target.value)} />
              {mode === "register" && (
                <Input label="昵称" placeholder="请输入您的昵称" value={nickname} onChange={(e) => setNickname(e.target.value)} />
              )}
              <Button className="w-full" onClick={mode === "login" ? handleLogin : handleRegister} disabled={loading}>
                {mode === "login" ? "立即登录" : "提交注册"}
              </Button>
            </>
          )}
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm text-gray-600">{mode === "login" ? "还没有账号？立即注册" : "已有账号？返回登录"}</span>
            <Button variant="ghost" className="text-sm p-0 h-auto" onClick={() => {
              if (!smsSent) { setMode(mode === "login" ? "register" : "login"); return; }
              setMode(mode === "login" ? "register" : "login");
            }}>
              {mode === "login" ? "注册" : "登录"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
