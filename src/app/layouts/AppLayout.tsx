"use client";
import type {LayoutProps} from "rwsdk/router";
import {AppSidebar} from "@/app/components/app-sidebar";
import {SiteHeader} from "@/app/components/site-header";
import {ThemeProvider} from "@/app/components/ThemeProvider";
import {SidebarInset, SidebarProvider} from "@/app/components/ui/sidebar";

export function AppLayout({children}: LayoutProps) {
  return (
    <div className="app [--header-height:calc(--spacing(14))]">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider className="flex flex-col">
          <SiteHeader/>
          <div className="flex flex-1">
            <AppSidebar/>
            <SidebarInset>{children}</SidebarInset>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
