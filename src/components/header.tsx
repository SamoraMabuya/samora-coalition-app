import { Button, type ButtonProps } from "@/components/ui/button";
import Image from "next/image";

type NavItem = {
  label: string;
  icon: string;
  variant: ButtonProps["variant"];
  isActive?: boolean;
};

const navItems: NavItem[] = [
  { label: "Overview", icon: "/assets/icons/home.svg", variant: "ghost" },
  {
    label: "Patients",
    icon: "/assets/icons/group.svg",
    variant: "ghost",
    isActive: true,
  },
  {
    label: "Schedule",
    icon: "/assets/icons/calendar_today.svg",
    variant: "ghost",
  },
  { label: "Message", icon: "/assets/icons/chat_bubble.svg", variant: "ghost" },
  {
    label: "Transactions",
    icon: "/assets/icons/credit_card.svg",
    variant: "ghost",
  },
];

const Header = () => {
  return (
    <header className="rounded-e-3xl rounded-s-3xl border-gray-200 bg-white px-4 py-2 justify-between flex items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/graphics/logo.svg"
          alt="Tech.Care Logo"
          className="mr-2 "
          width={200}
          height={200}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center ">
        <nav className="flex items-center justify-center space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.variant}
              className={`flex items-center space-x-2 ${
                item.isActive
                  ? "bg-teal-400 text-white hover:bg-teal-500 rounded-2xl"
                  : ""
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label.toLowerCase()}
                width={16}
                height={16}
              />
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/headshots/senior-woman-doctor-and-portrait-smile-for-health.png"
            alt="Doctor Profile"
            className="rounded-full"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Dr. Jose Simmons</span>
            <span className="text-xs text-gray-500">General Practitioner</span>
          </div>
        </div>
        <div className="h-8 w-px bg-gray-300" />
        <div>
          <Button variant="ghost" size="icon">
            <Image
              src="/assets/icons/settings.svg"
              alt="Settings"
              width={18}
              height={18}
            />
          </Button>
          <Button variant="ghost" size="icon" className="w-2">
            <Image
              src="/assets/icons/more_vert.svg"
              alt="More options"
              width={4}
              height={4}
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
