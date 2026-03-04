import AudioPlayer from "../AudioPlayer";

const ProjectSummarySection = () => {
	return (
		<div className="py-1 px-6 color-gray-700 dark:text-gray-300">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">About Me</h3>

						<AudioPlayer src="/audio/about-me-pt.mp3" />
					</div>

					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Iniciei nessa jornada em 2018 com a minha primeira linguagem sendo o abandonado VB.NET com projetos Windows Forms e ASP.NET Web Forms sempre utilizando SQL Server. Ainda na era do indispensável Stack Overflow, onde não haviam LLMs quem geram códigos com uma frase mal escrita como prompt e com uma linguagem já na época obsoleta, concluo que o aprendizado era muito mais árduo e demorado, porém recompensado com o entendimento pleno sobre cada linha de código escrita.
					</p>

					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Com meu primeiro emprego de 2019 a 2024, fui apresentado a vários projetos nas mais diferentes versões do .NET, como .NET Standard para dll's, .NET Framework, e o .NET Core que posteriormente foi substituído pelo atual .NET. Nesse tempo também fui apresentado a muitas variantes de frameworks do mesmo como o já citado ASP.NET Web Forms e Win Forms, MVC, Razor, Web Api, Minimal API e Blazor.
					</p>

					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Além da ampla experiência com tecnologias do .NET, também trabalhei durante 7 anos com o SAP Business One, que além de me permitir adquirir muito conhecimento sobre processos empresariais como um todo, também me gerou vasta expertise com T-SQL utilizando o SQL Server. Como o cerne do SAP B1 como aplicação é a sua engenharia na administração dos dados e tabelas, o contato diário e a boa assimilação sobre suas relações entre tabelas e sua estrutura são praticamente obrigatórios para formar um bom desenvolvedor.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectSummarySection;
