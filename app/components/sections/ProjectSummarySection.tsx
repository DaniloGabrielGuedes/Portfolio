import { useState } from "react";
import AudioPlayer from "../AudioPlayer";

const ProjectSummarySection = () => {


	return (
		<div className="py-1 px-6 color-gray-700 dark:text-gray-300">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
							Project Summary
						</h3>

						<AudioPlayer src="/audio/project-summary-pt.mp3" />
					</div>

					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Olá, bem vindo ao meu portfólio!
					</p>

					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Desenvolvido com Next.js, Tailwind CSS e Three.js, criei este portfólio com o intuito de treinar meu conhecimento e aplicação de Typescript, como da mesma forma tentando agregar alguns de meus interesses pessoais, sendo exploração espacial e modelagem 3D os principais.
					</p>
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						O modelo do foguete, um Ariane 1 da ESA (European Space Agency) ainda não é totalmente de minha autoria, apenas com alguns ajustes de proporção de posicionamento utilizando o Blender. Entretanto um modelo autoral já está em desenvolvimento.
					</p>
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Igualmente, algumas ideias futuras para o projeto contam com um próprio roadmap de desenvolvimento, uma nova seção para demais projetos pessoais, mais animações do foguete e animações de pouso.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectSummarySection;
