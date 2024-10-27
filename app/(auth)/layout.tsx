import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              {/* TODO: Re-capture a new screenshot of the homescreen and attach as image */}
              <Image src="/icons/auth-image.svg" alt="auth image"
              width={500}
              height={500}
              />
            </div>
          </div>
      </main>
    );
  }
  