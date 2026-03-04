import Image from 'next/image';

const ProfileSection = () => {
	return (
		<div className="w-full py-8 md:py-0 px-6 pt-16 sm:pt-0">
			<div className="space-y-8 text-center">
				<div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
					<div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
						<Image src="/perfil.jpg" alt="Profile" fill className="object-cover" priority />
					</div>
				</div>

				<div className="space-y-3">
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Danilo Gabriel Guedes</h1>
					<h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Desenvolvedor .NET</h2>
					<div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4" />
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
						7+ de experiência em desenvolvimento de software, especializado em .NET, C#, e tecnologias web
					</p>
				</div>
				<div className="flex items-center justify-center space-x-2">
					<svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span className="text-sm text-gray-600 dark:text-gray-400">Sorocaba, SP </span>
				</div>

				<div className="space-y-4">

					<div className="flex items-center justify-center space-x-2">
						<svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<a href="mailto:john.doe@example.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
							danilo.gabriel.guedes@gmail.com
						</a>
					</div>

					<div className="flex items-center justify-center space-x-4 pt-2">
						<a
							href="https://github.com/DaniloGabrielGuedes"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-600 transition-colors"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/danilo-g-guedes/"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
						<div className="relative group">
							<a
								href="https://wa.me/5515998501635?text=Ol%C3%A1%20Danilo%2C%20vim%20pelo%20seu%20portf%C3%B3lio."
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors block"
							>
								<svg viewBox="0 0 32 32" width="25" height="25" fill="currentColor">
									<path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.59.76 5.001 2.065 7.018L3 29l6.19-2.028A12.93 12.93 0 0016.001 29C23.18 29 29 23.18 29 16S23.18 3 16.001 3zm0 23.5c-2.165 0-4.185-.63-5.89-1.715l-.42-.265-3.675 1.205 1.215-3.585-.275-.435A10.44 10.44 0 015.5 16c0-5.79 4.71-10.5 10.501-10.5C21.79 5.5 26.5 10.21 26.5 16S21.79 26.5 16.001 26.5zm5.775-7.78c-.315-.158-1.86-.918-2.15-1.022-.29-.105-.5-.158-.71.158-.21.315-.815 1.022-.998 1.232-.185.21-.368.237-.683.08-.315-.158-1.33-.49-2.535-1.565-.94-.84-1.575-1.88-1.76-2.195-.185-.315-.02-.485.14-.642.145-.145.315-.368.472-.552.158-.185.21-.315.315-.525.105-.21.053-.395-.026-.552-.08-.158-.71-1.712-.972-2.345-.255-.612-.515-.53-.71-.54l-.605-.01c-.21 0-.552.08-.84.395-.29.315-1.102 1.078-1.102 2.63s1.13 3.05 1.29 3.26c.158.21 2.225 3.4 5.39 4.77.75.325 1.335.52 1.79.665.75.238 1.435.205 1.975.125.603-.09 1.86-.76 2.125-1.495.263-.735.263-1.365.185-1.495-.08-.13-.29-.21-.605-.368z" />
								</svg>
							</a>

							<span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap
								bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md
								opacity-0 group-hover:opacity-100 transition-opacity duration-300
								pointer-events-none shadow-lg">
								Me chame no WhatsApp.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
