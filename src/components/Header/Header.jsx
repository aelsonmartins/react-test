import './Header.module.css'
import { User } from 'phosphor-react';

export function Header() {
  return (
    <header>
      <div>
          <div>
            <User size={32} color="black"/>
          </div>
      </div>
    </header>
  )
}