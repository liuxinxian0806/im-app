import os

base_dir = "im-app/src/renderer"
files_to_check = [
    "App.tsx",
    "features/navigation/NavigationSidebar.tsx",
    "features/chat-list/ConversationList.tsx",
    "features/chat-list/ChatItem.tsx",
    "features/chat-window/ChatWindow.tsx",
    "features/chat-window/components/MessageFeed.tsx",
    "features/chat-window/components/MessageBubble.tsx",
    "features/chat-window/components/InputArea.tsx",
    "features/chat-window/components/ChatHeader.tsx",
    "utils/dummyData.ts",
    "store/useChatStore.ts",
    "types/chat.ts"
]

def check_imports(file_path):
    full_path = os.path.join(base_dir, file_path)
    if not os.path.exists(full_path):
        return f"File not found: {full_path}"
    
    errors = []
    with open(full_path, 'r') as f:
        lines = f.readlines()
    
    for line in lines:
        if "from '" in line or 'from "' in line:
            # Extract import path
            parts = line.split('from ')
            if len(parts) < 2: continue
            import_path = parts[1].strip().strip("'").strip('"')
            
            if import_path.startswith('.'):
                # Resolve relative path
                current_dir = os.path.dirname(full_path)
                target_path = os.path.abspath(os.path.join(current_dir, import_path))
                
                if not os.path.exists(target_path) and not target_path.endswith('.ts') and not target_path.endswith('.tsx'):
                    # Check if it might be a missing extension
                    if os.path.exists(target_path + '.ts') or os.path.exists(target_path + '.tsx'):
                        pass # It's fine, Vite/TS resolves it
                    else:
                        errors.append(f"Invalid import in {file_path}: '{import_path}' -> {target_path} (NOT FOUND)")
    return errors

for f in files_to_check:
    errs = check_imports(f)
    if err	ers:
        print("\n".join(errs))
    else:
        print(f"OK: {f}")

