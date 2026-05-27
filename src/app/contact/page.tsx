export default function Contact() {
  return (
    <div className="py-12 lg:py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 opacity-90">Have questions about our products or your order? We're here to help you on your journey to vitality.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📧</span>
                  <span>hello@vidaflow.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📱</span>
                  <span>+1 (555) VIDA-FLOW</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-bold text-foreground mb-2">First Name</label>
                    <input type="text" id="first_name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-bold text-foreground mb-2">Last Name</label>
                    <input type="text" id="last_name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-foreground text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors shadow-lg hover:shadow-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
