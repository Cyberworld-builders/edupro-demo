import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">EduPro</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Empowering learners worldwide with expert-led online courses designed for career advancement and personal growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.2-.9 1.265-5.36 1.265-5.36s-.323-.653-.323-1.618c0-1.518.879-2.653 1.977-2.653.932 0 1.383.697 1.383 1.538 0 .936-.597 2.333-.905 3.63-.257 1.075.538 1.951 1.596 1.951 1.915 0 3.386-2.021 3.386-4.936 0-2.58-1.855-4.386-4.502-4.386-3.067 0-4.866 2.298-4.866 4.676 0 .925.357 1.923.803 2.462.088.106.101.2.075.309-.082.33-.264 1.077-.3 1.228-.047.196-.156.238-.359.143-1.332-.619-2.166-2.566-2.166-4.129 0-3.393 2.467-6.505 7.105-6.505 3.729 0 6.635 2.657 6.635 6.206 0 3.7-2.334 6.675-5.575 6.675-1.089 0-2.114-.564-2.463-1.314l-.667 2.545c-.241.939-.895 2.117-1.332 2.833.999.31 2.058.478 3.158.478 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Courses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Business Analytics</a></li>
              <li><Link href="/courses" className="text-slate-300 hover:text-white transition-colors">All Courses</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Student Resources</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">
              © 2024 EduPro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
