import React, { useState, useRef, useEffect } from "react";
import { Smile, Paperclip, Mic, Send } from "lucide-react";
import { useChatStore } from "../../../store/useChatStore"; "../../../../../store/useChatStore";

const InputArea: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const { activeConversationId, addMessage, currentUserId } = useChatStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = () => {
    if (!inputText.trim() || !activeConversationId) return;

    addMessage(activeConversationId, {
      conversationId: activeConversationId,
      senderId: currentUserId,
      type: "text",
      content: inputText,
      timestamp: Date.now(),
    });

    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [inputText]);

  return (
    <div className="p-4 bg-white border-t border-slate-200">
      <div className="flex items-end gap-3">
        <button type="button" className="text-slate-500 hover:text-blue-500 transition-colors p-1"><Smile size={24} /></button>
        <button type="button" className="text-slate-500 hover:text-blue-500 transition-colors p-1"><Paperclip size={24} /></button>
        <div className="flex-grow relative">
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="w-full resize-none bg-slate-100 border-none rounded-2xl py-3 px-4 pr-12 text-sm focus:ring-2 focus:ring-blue-500 outline-none max-h-32 overflow-y-auto"
          />
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="text-slate-500 hover:text-blue-500 transition-colors p-1"><Mic size={24} /></button>
          <button 
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className={`p-2 rounded-full transition-all shadow-lg ${inputText.trim() ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-slate-300 text-white cursor-not-allowed"}`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputArea;