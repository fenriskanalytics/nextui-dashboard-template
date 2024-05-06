import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import getUserSession from "@/utils/lib/user-GetSession";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { UserDropdown } from "@/components/navbar/user-dropdown";

interface FenriskHeaderProps {
  // Define any props here if needed
}

const FenriskHeader: React.FC<FenriskHeaderProps> = async () => {
  const { data } = await getUserSession();

  const logoutAction = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  };

  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <img
            src="/images/FenriskLightModeLogo.svg"
            alt="Fenrisk Logo"
            className="h-8 w-auto"
          />
        </NavbarBrand>
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/datafeed">DataFeed</Link>
        </NavbarItem>
        {!data.session && (
          <>
            <NavbarItem>
              <Link href="/register">Register</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/login">Login</Link>
            </NavbarItem>
          </>
        )}
        {data.session && (
          <>
            <NavbarItem>
              <Link href="/profile">Profile</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/dashboard">Dashboard</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/fenrisk-five">Fenrisk Five</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/carbon-pm">Carbon PM</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/fenrisk-analytics">Fenrisk Analytics</Link>
            </NavbarItem>
            <NavbarItem onClick={logoutAction}>
              Logout
            </NavbarItem>
            <NavbarContent>
              <UserDropdown />
            </NavbarContent>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default FenriskHeader;
