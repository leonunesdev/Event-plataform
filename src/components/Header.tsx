import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-blue-400 border-b border-blue-300">
      <Logo />
    </header>
  )
}