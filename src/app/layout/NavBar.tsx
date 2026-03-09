import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/theory', label: 'Theory Library' },
  { to: '/vocabulary', label: 'Vocabulary Hub' },
  { to: '/admin/login', label: 'Admin' },
];

export default function NavBar() {
  return (
    <header className="border-b border-white/10 bg-[rgb(var(--panel))]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <p className="font-display text-xl tracking-wide">Navigator</p>
        <nav className="flex items-center gap-2 text-sm sm:gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-md px-3 py-2 transition',
                  isActive ? 'bg-white/10 text-white shadow-glow' : 'text-white/80 hover:bg-white/5 hover:text-white',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
