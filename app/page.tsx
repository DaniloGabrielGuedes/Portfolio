"use client";

import { Suspense, useState, useEffect } from 'react';
import ProfileSection from './components/sections/ProfileSection';
import ProjectSummarySection from './components/sections/ProjectSummarySection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import AboutMeSection from './components/sections/AboutMeSection';
import { RocketCanvas } from './components/threeD/RocketCanvas';
import Navbar from './components/Navbar';
import LoadingPage from './components/LoadingPage';

export default function Portfolio() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading && <LoadingPage />}

			<main className={`relative min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
				<Navbar />

				<div id="canvas-container" className="fixed top-0 left-0 w-full h-screen -z-10">
					<Suspense fallback={null}>
						<RocketCanvas />
					</Suspense>
				</div>

				<div className="relative z-10 grid md:grid-cols-12 pointer-events-none pt-32 pb-20 min-h-screen items-center">
					<div className="hidden md:block md:col-span-1 lg:col-span-2" />
					<div className="col-span-12 md:col-span-8 lg:col-span-6 pointer-events-auto px-4">
						<div className="relative overflow-hidden rounded-3xl border border-white/10 md:p-12 p-6 shadow-2xl backgroundBlur">
							<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

							<div className="space-y-10">
								<section><ProfileSection /></section>
								<section><SkillsSection /></section>
								<section><ExperienceSection /></section>
								<section><ProjectSummarySection /></section>
								<section><AboutMeSection /></section>
							</div>
						</div>
					</div>
					<div className="hidden md:block md:col-span-3 lg:col-span-4" />
				</div>
			</main>
		</>
	);
}