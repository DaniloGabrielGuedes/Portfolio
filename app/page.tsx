import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import { RocketCanvas } from './components/threeD/RocketCanvas';
import Navbar from './components/Navbar';

export default function Portfolio() {
	return (
		<main className="relative min-h-screen">

			<Navbar />

			<div id="canvas-container" className="fixed top-0 left-0 w-full h-screen -z-10">
				<RocketCanvas />
			</div>

			<div className="relative z-10 grid md:grid-cols-12 pointer-events-none pt-20">
				<div className="md:col-span-9 pointer-events-auto px-6">
					<ProfileSection />
					<SkillsSection />
					<ExperienceSection />
				</div>

				<div className="md:col-span-3" />
			</div>

		</main>
	);
}
