import Image from "next/image";
import { Talk } from "./talksData";
import { ExternalLink, Linkedin, LinkedinIcon, TwitterIcon } from "lucide-react";

const TalkCard: React.FC<{ talk: Talk }> = ({ talk }) => (
	<div className="group relative bg-linear-to-br from-purple-600 via-blue-600 to-teal-500 p-[2px] rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
		{/* Inner content container */}
		<div className="bg-white rounded-[14px] p-4 sm:py-6 h-full relative overflow-hidden">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-5 bg-linear-to-br from-purple-100 to-blue-100"></div>

			{/* Mobile layout (< md) - vertical stack with content below image */}
			<div className="relative md:hidden">
				{/* Speaker image */}
				<div className="shrink-0">
					<div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-xl overflow-hidden bg-linear-to-br from-purple-200 to-blue-200 group-hover:scale-105 transition-transform duration-300">
						<Image
							src={talk.speakerImage}
							alt={talk.speaker}
							className="w-full h-full object-cover"
							width={100}
							height={100}
						/>
						{/* Gradient overlay on hover */}
						<div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
				</div>

				{/* Content below image - centered on mobile */}
				<div className="mt-4 space-y-3 text-center">
					{/* Speaker name and role */}
					<div className="space-y-2">
						<div className="inline-flex">
							<h2 className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-600 rounded-full text-xs font-bold text-white shadow-lg group-hover:shadow-emerald-300/50 transition-all duration-300 group-hover:scale-105">
								{talk.speaker}
							</h2>
						</div>
						<p className="text-xs text-gray-600 font-medium">{talk.speakerRole}</p>
					</div>

					{/* Talk title */}
					<h3 className="text-sm font-bold bg-linear-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
						{talk.title}
					</h3>

					{/* Speaker bio */}
					<p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
						{talk.speakerBio}
					</p>
					
					{/* Time and social links - stacked on mobile */}
					<div className="flex flex-col gap-3 pt-2">
						<div className="flex items-center justify-center gap-2">
							<div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse"></div>
							<p className="text-xs text-gray-700 font-medium">
								{talk.time}
							</p>
						</div>

						{/* Social links */}
						<div className="flex items-center justify-center gap-2">
							<a
								href={talk.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
								onClick={(e) => e.stopPropagation()}
								title="LinkedIn Profile"
							>
								<Linkedin size={16} />
							</a>
							<a
								href={talk.twitter}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-400 transition-colors duration-200"
								onClick={(e) => e.stopPropagation()}
								title="Twitter/X Profile"
							>
								<TwitterIcon size={16} />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop layout (md+) - horizontal with names/titles beside image */}
			<div className="relative hidden md:flex gap-4">
				{/* Left column: Speaker image and details below */}
				<div className="shrink-0 w-48 lg:w-56">
					{/* Speaker image */}
					<div className="relative w-28 h-28 lg:w-36 lg:h-36 mx-auto rounded-xl overflow-hidden bg-linear-to-br from-purple-200 to-blue-200 group-hover:scale-105 transition-transform duration-300">
						<Image
							src={talk.speakerImage}
							alt={talk.speaker}
							className="w-full h-full object-cover"
							width={100}
							height={100}
						/>
						{/* Gradient overlay on hover */}
						<div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>

					{/* Content below image */}
					<div className="mt-4 space-y-3 text-center">
						{/* Speaker role */}
						<p className="text-sm text-gray-600 font-medium">{talk.speakerRole}</p>

						{/* Time */}
						<div className="flex items-center justify-center gap-2">
							<div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse"></div>
							<p className="text-sm text-gray-700 font-bold">
								{talk.time}
							</p>
						</div>

						{/* Social links */}
						<div className="flex items-center justify-center gap-2">
							<a
								href={talk.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
								onClick={(e) => e.stopPropagation()}
								title="LinkedIn Profile"
							>
								<LinkedinIcon size={16} />
							</a>
							<a
								href={talk.twitter}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-400 transition-colors duration-200"
								onClick={(e) => e.stopPropagation()}
								title="Twitter/X Profile"
							>
								{/* Dynamic icon rendering based on URL */}
								{
									talk.twitter.search("x.com") !== -1 ? <TwitterIcon size={16} /> : <ExternalLink size={16} />
								}
							</a>
						</div>
					</div>
				</div>

				{/* Right column: Name, title and bio */}
				<div className="flex-1 space-y-4">
					{/* Speaker name */}
					<div className="inline-flex">
						<h2 className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-600 rounded-full text-sm font-bold text-white shadow-lg group-hover:shadow-emerald-300/50 transition-all duration-300 group-hover:scale-105">
							{talk.speaker}
						</h2>
					</div>

					{/* Talk title */}
					<h3 className="text-base lg:text-lg font-bold bg-linear-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
						{talk.title}
					</h3>

					{/* Speaker bio - now has much more space */}
					<p className="text-sm text-gray-600 leading-relaxed line-clamp-6 lg:line-clamp-8" title={talk.speakerBio}>
						{talk.speakerBio}
					</p>

				</div>
			</div>
		</div>
	</div>
);

export default TalkCard;