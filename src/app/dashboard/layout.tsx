import Footer from "@/components/ui/Footer"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
       
       <h1>NAV BAR</h1>
   
        {children}

        <Footer></Footer>
      </section>
    )
  }