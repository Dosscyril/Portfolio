import React from "react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed
import WindowCard from "../components/WindowCard";

// Import screenshots (you'll need to add these to your assets)
import heroImg from "../assets/project/ecommerce.jpg"; // Main hero image
// import screenshot1 from "../assets/project/handmade-home.jpg";
// import screenshot2 from "../assets/project/handmade-admin.jpg";
// import screenshot3 from "../assets/project/handmade-checkout.jpg";

export default function HandMadeHubDetail() {
  return (
    <div className="min-h-screen bg-[#0f0f15] pt-24 pb-16">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-blue-800/20 to-fuchsia-800/20 blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16 space-y-12">
        
        {/* ============ HERO SECTION ============ */}
        <WindowCard className="animate-fadeInUp">
          <div className="space-y-6">
            
            {/* Back Button */}
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
            >
              <span>←</span>
              <span>Back to Projects</span>
            </Link>

            {/* Project Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
                HandMadeHub
              </h1>
              <p className="text-xl text-gray-700">
                Full-Stack MERN E-Commerce Platform for Handcrafted Products
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://handmadehub-61cd.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 
                           text-white rounded-lg font-semibold shadow-lg 
                           hover:opacity-90 transition"
              >
                View Live Demo
              </a>
              <a
                href="https://github.com/Dosscyril/HandMadeHub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-700 bg-white 
                           text-gray-900 rounded-lg font-semibold 
                           hover:bg-gray-50 transition"
              >
                View on GitHub
              </a>
            </div>

            {/* Hero Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src={heroImg} 
                alt="HandMadeHub Homepage" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </WindowCard>

        {/* ============ OVERVIEW ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📋 Project Overview</h2>
          
          <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
            <p>
              <strong>HandMadeHub</strong> is a production-ready e-commerce platform built for a client's 
              handcrafted products business. The application enables real customers to browse products, 
              manage their cart, complete purchases with integrated payment systems, and track their orders.
            </p>
            
            <p>
              The platform features a comprehensive admin dashboard that allows business owners to manage 
              products, process orders, and view analytics — eliminating the need for manual data entry 
              and streamlining business operations.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="font-semibold text-blue-900">💡 Why I Built This</p>
              <p className="text-blue-800 mt-2">
                A friend passionate about handmade crafts needed an online platform to showcase and sell 
                their products. I saw this as an opportunity to build a real-world application with actual 
                users and business requirements — not just a portfolio piece.
              </p>
            </div>
          </div>
        </WindowCard>

        {/* ============ KEY METRICS ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 Impact & Results</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
              <div className="text-4xl font-extrabold text-purple-600 mb-2">60+</div>
              <div className="text-gray-700 font-medium">Active Users</div>
              <div className="text-sm text-gray-600 mt-1">Real customers using the platform</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700 font-medium">Transactions</div>
              <div className="text-sm text-gray-600 mt-1">Successfully processed orders</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">30+</div>
              <div className="text-gray-700 font-medium">Products Listed</div>
              <div className="text-sm text-gray-600 mt-1">Handcrafted items available</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-900 font-semibold">✅ 30% Reduction in Checkout Friction</p>
            <p className="text-green-800 text-sm mt-1">
              Streamlined cart and payment flow improved conversion rates and user experience
            </p>
          </div>
        </WindowCard>

        {/* ============ TECH STACK ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🛠️ Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Frontend
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>React.js</strong> - Component-based UI architecture
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>Tailwind CSS</strong> - Responsive, modern styling
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>React Context API</strong> - State management for cart and auth
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Backend
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>Node.js + Express.js</strong> - RESTful API server
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>MongoDB Atlas</strong> - Cloud NoSQL database
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>JWT Authentication</strong> - Secure user sessions
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Deployment
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <div>
                    <strong>Render</strong> - Cloud hosting platform
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <div>
                    <strong>Environment Variables</strong> - Secure config management
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">💳</span>
                Payment Integration
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <div>
                    <strong>Cash on Delivery</strong> - Traditional payment method
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <div>
                    <strong>Online Payments</strong> - Integrated payment gateway
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WindowCard>

        {/* ============ KEY FEATURES ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✨ Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-xl">
                  🛒
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Cart Management</h4>
                  <p className="text-gray-700 text-sm">
                    Add, remove, update quantities with real-time inventory validation
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl">
                  🔐
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Secure Authentication</h4>
                  <p className="text-gray-700 text-sm">
                    JWT-based auth with role-based access control (customer/admin)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xl">
                  💳
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Payment Integration</h4>
                  <p className="text-gray-700 text-sm">
                    Multiple payment options including COD and online payments
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-xl">
                  📦
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Order Tracking</h4>
                  <p className="text-gray-700 text-sm">
                    Users can view order history and track delivery status
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-xl">
                  👨‍💼
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Admin Dashboard</h4>
                  <p className="text-gray-700 text-sm">
                    Comprehensive panel for products, orders, and user management
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Responsive Design</h4>
                  <p className="text-gray-700 text-sm">
                    Fully mobile-optimized shopping experience across all devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </WindowCard>

        {/* ============ CHALLENGES & SOLUTIONS ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Challenges & Solutions</h2>
          
          <div className="space-y-6">
            {/* Challenge 1 */}
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                ⚠️ Challenge: Real-time Inventory Management
              </h4>
              <p className="text-gray-700 mb-3">
                Multiple users could add the same product to cart simultaneously, leading to overselling 
                when stock was limited.
              </p>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900 mb-1">✅ Solution:</p>
                <p className="text-green-800 text-sm">
                  Implemented server-side inventory validation before checkout. Added optimistic UI updates 
                  with rollback on stock unavailability, ensuring users never complete orders for out-of-stock items.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                ⚠️ Challenge: Payment Integration Security
              </h4>
              <p className="text-gray-700 mb-3">
                Needed to handle sensitive payment data securely while supporting multiple payment methods.
              </p>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900 mb-1">✅ Solution:</p>
                <p className="text-green-800 text-sm">
                  Used environment variables for API keys, implemented HTTPS, and never stored sensitive 
                  payment data on our servers. Integrated trusted payment gateway for secure transactions.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                ⚠️ Challenge: Deployment & Performance
              </h4>
              <p className="text-gray-700 mb-3">
                Free tier hosting had cold start issues causing slow initial load times for users.
              </p>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900 mb-1">✅ Solution:</p>
                <p className="text-green-800 text-sm">
                  Optimized bundle size, implemented code splitting, added loading states, and used MongoDB 
                  Atlas connection pooling to reduce database query times.
                </p>
              </div>
            </div>
          </div>
        </WindowCard>

        {/* ============ WHAT I LEARNED ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎓 What I Learned</h2>
          
          <div className="space-y-4 text-gray-800">
            <div className="flex gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <strong>Building for Real Users is Different:</strong> Feature requests, bug reports, 
                and user feedback taught me to prioritize user experience over feature complexity.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <strong>Security is Critical:</strong> Learned proper authentication flows, input validation, 
                and secure payment handling practices essential for production applications.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <strong>Database Design Matters:</strong> Proper schema design and indexing significantly 
                impacted query performance and scalability.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <strong>Deployment Best Practices:</strong> Environment configuration, error monitoring, 
                and graceful degradation are crucial for production reliability.
              </div>
            </div>
          </div>
        </WindowCard>

        {/* ============ FUTURE IMPROVEMENTS ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.7s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Future Improvements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">📧 Email Notifications</h4>
              <p className="text-blue-800 text-sm">
                Automated order confirmations and shipping updates via email
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">⭐ Product Reviews</h4>
              <p className="text-purple-800 text-sm">
                Allow customers to rate and review purchased products
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">🔍 Advanced Search</h4>
              <p className="text-green-800 text-sm">
                Filter by category, price range, and product attributes
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">📈 Analytics Dashboard</h4>
              <p className="text-orange-800 text-sm">
                Sales metrics, popular products, and revenue insights for admin
              </p>
            </div>
          </div>
        </WindowCard>

        {/* ============ FINAL CTA ============ */}
        <WindowCard className="animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Explore?</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Check out the live application or dive into the code to see how everything works under the hood.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://handmadehub-61cd.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 
                           text-white rounded-lg font-semibold shadow-lg text-lg
                           hover:opacity-90 transition"
              >
                🚀 View Live Project
              </a>
              <a
                href="https://github.com/Dosscyril/HandMadeHub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-700 bg-white 
                           text-gray-900 rounded-lg font-semibold text-lg
                           hover:bg-gray-50 transition"
              >
                💻 View Source Code
              </a>
            </div>

            <Link 
              to="/#projects" 
              className="inline-block text-gray-600 hover:text-gray-900 transition mt-4"
            >
              ← Back to All Projects
            </Link>
          </div>
        </WindowCard>

      </div>
    </div>
  );
}