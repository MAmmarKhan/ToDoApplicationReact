import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <div>
          <h1>To-Do App</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
