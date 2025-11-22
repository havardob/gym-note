import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header className={'header'}>
        <div className={'u-max-content-width'}>
          <div className={'header-inner'}>
            <div className={'logo'}>
              <Link href={'/gym-note/public'}>Logo</Link>
            </div>
            <button className={'menu-toggle'}>Menu</button>
          </div>
        </div>
      </header>

      <style jsx>{`
         .header {
            padding-block: 1rem;
            background-color: var(--color-background-neutral-default);
            border-block-end: 1px solid var(--color-border-neutral-subtle);
            font-size: 1.125rem;
         }

         .header-inner {
            display: flex;
            align-items: center;
            column-gap: 1rem;
            justify-content: space-between;
         }
         
         .logo {
            font-size: 1.25rem;
            font-weight: 500;
            text-decoration: none;
         }
         
         .menu-toggle {
            display: flex;
            align-items: center;
            padding: .375em 1em;
            border-radius: .25rem;
         }
      `}</style>
    </>
  );
};