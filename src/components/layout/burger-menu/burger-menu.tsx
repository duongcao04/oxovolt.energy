import { Button, Drawer } from '@heroui/react';
import { Link } from '@tanstack/react-router';
import { BURGER_MENU, type MenuItem } from './data/menu';
import { ArrowLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';

export const BurgerMenu = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <aside>
      <Drawer>
        {trigger}
        <Drawer.Backdrop>
          <Drawer.Content placement='left'>
            <Drawer.Dialog className='px-4'>
              <Drawer.Body className='mt-12 p-0'>
                <SidebarContent />
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </aside>
  );
};

function SidebarContent() {
  // This stack keeps track of our drill-down history.
  // An empty array means we are at the root level.
  const [menuStack, setMenuStack] = useState<MenuItem[]>([]);

  // Get the current active menu item (the one at the top of the stack)
  const currentParent =
    menuStack.length > 0 ? menuStack[menuStack.length - 1] : null;
  // If we are in a sub-menu, render its children. Otherwise, render the root menu.
  const currentItems = currentParent ? currentParent.children! : BURGER_MENU;

  // Navigate back up one level
  const handleBack = () => {
    setMenuStack((prev) => prev.slice(0, -1));
  };

  // Navigate down one level
  const handleDrillDown = (item: MenuItem) => {
    setMenuStack((prev) => [...prev, item]);
  };

  return (
    <div className='flex flex-col h-full w-full'>
      {/* Dynamic Header: Shows Back Button and Parent Title if in a sub-menu */}
      {currentParent && (
        <div className='flex items-start gap-4 px-2 pb-4 mb-2'>
          <Button onClick={handleBack} aria-label='Go back' variant='ghost'>
            <ArrowLeftIcon strokeWidth={3} size={20} />
          </Button>
          <h2 className='text-2xl font-bold uppercase tracking-widest leading-tight'>
            {currentParent.title}
          </h2>
        </div>
      )}

      {/* Menu Items List */}
      <nav className='flex-1 flex flex-col'>
        {currentItems.map((item, index) => (
          <MenuItemNode
            key={index}
            item={item}
            onDrillDown={() => handleDrillDown(item)}
          />
        ))}
      </nav>
    </div>
  );
}

// ------------------------------------------------------------------
// Internal Component for individual rows
// ------------------------------------------------------------------
function MenuItemNode({
  item,
  onDrillDown,
}: {
  item: MenuItem;
  onDrillDown: () => void;
}) {
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className='border-b border-border-default transition duration-300'>
        <button
          onClick={onDrillDown}
          className='flex w-full items-center justify-between px-6 py-5 hover:bg-background-hovered transition-colors cursor-pointer text-left'
        >
          <span className='font-bold text-[13px] tracking-widest uppercase text-text-default'>
            {item.title}
          </span>
          <ChevronRightIcon size={18} className='text-text-default' />
        </button>
      </div>
    );
  }

  // Standard Link for items WITHOUT children
  return (
    <div className='border-b border-border-default transition duration-300'>
      <Link
        to={item.href}
        className='flex items-center justify-between px-6 py-5 hover:bg-background-hovered transition-colors w-full'
        {...item.linkProps}
      >
        <span className='font-bold text-[13px] tracking-widest uppercase text-text-default'>
          {item.title}
        </span>
      </Link>
    </div>
  );
}
