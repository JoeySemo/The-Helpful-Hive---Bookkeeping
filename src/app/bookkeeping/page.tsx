import Link from 'next/link';

export default function BookkeepingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 to-white font-sans">


            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Taking the Sting Out of Business Finances
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Reliable payroll, bookkeeping, and CFO services for St. Louis businesses
                    </p>
                    <div className="space-x-4">
                        <a href="#contact" className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 inline-block transition-colors">
                            Schedule Free Consult
                        </a>
                        <a href="#services" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 inline-block transition-colors">
                            View Services
                        </a>
                    </div>
                </div>

                <div id="services" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Service Payroll</h3>
                        <p className="text-gray-600 mb-4">Accurate, on-time payroll processing</p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>✓ Direct Deposit & Checks</li>
                            <li>✓ Tax Filing</li>
                            <li>✓ W-2 & 1099 Prep</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Bookkeeping</h3>
                        <p className="text-gray-600 mb-4">Monthly reconciliation and tracking</p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>✓ Bank Reconciliation</li>
                            <li>✓ AP/AR Management</li>
                            <li>✓ Financial Statements</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">QuickBooks Cleanup</h3>
                        <p className="text-gray-600 mb-4">Fix errors and catch up on backlogs</p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>✓ Error Correction</li>
                            <li>✓ Chart Organization</li>
                            <li>✓ Backlog Catch-Up</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">CFO & Advisory</h3>
                        <p className="text-gray-600 mb-4">Strategic financial guidance</p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>✓ Cash Flow Management</li>
                            <li>✓ Budgeting & Forecasting</li>
                            <li>✓ Strategic Planning</li>
                        </ul>
                    </div>
                </div>

                <div id="contact" className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Ready to Organize Your Finances?
                    </h3>
                    <p className="text-center text-gray-600 mb-8">
                        Fill out the form below or give us a call at (555) 123-4567
                    </p>
                    <form className="space-y-4">
                        <input type="text" placeholder="First Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                        <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                        <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                        <textarea placeholder="How can we help?" className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-amber-600"></textarea>
                        <button type="submit" className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
