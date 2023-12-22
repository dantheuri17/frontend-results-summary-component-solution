import iconReaction from './assets/images/icon-reaction.svg';
import iconMemory from './assets/images/icon-memory.svg';
import iconVerbal from './assets/images/icon-verbal.svg';
import iconVisual from './assets/images/icon-visual.svg';

function App() {
	return (
		<>
			<div className="grid items-center w-screen h-screen bg-pale-blue justify-items-center">
				<div className="grid w-[700px] h-[450px] grid-cols-2 bg-white">
					<div className="flex-col h-full px-16 text-white bg-gradient-to-b from-electric-violet to-cobalt-blue rounded-3xl">
						<div className="text-center py-7">
							<p>Your Result</p>
						</div>
						<div className="flex justify-center px-3">
							<div className="flex items-center justify-center w-full bg-gradient-to-b from-violet-blue to-persian-blue rounded-full aspect-square">
								<div>
									<h1 className="text-center text-7xl font-hankengrotesk-extra-bold">
										76
									</h1>
									<p className="text-center">of 100</p>
								</div>
							</div>
						</div>
						<div className="w-full mt-5">
							<h3 className="text-2xl text-center font-hankengrotesk-bold">
								Great
							</h3>
							<p className="w-full text-center font-hankengrotesk-medium">
								You scored higher than 65% of the people who have taken these
								tests.
							</p>
						</div>
					</div>
					<div className="px-10 py-7">
						<p className="text-lg font-hankengrotesk-bold">Summary</p>
						<div className="flex justify-between py-2 my-6 bg-light-red">
							<span className="flex gap-3">
								<img src={iconReaction} />
								<p className="font-hankengrotesk-bold text-score-red">
									Reaction
								</p>{" "}
							</span>

							<p>80 / 100</p>
						</div>
						<div className="flex justify-between py-2 my-6 bg-light-orangey-yellow">
							<span className="flex gap-3">
								<img src={iconMemory} alt="" />
								<p className="font-hankengrotesk-bold text-orangey-yellow">
									Memory
								</p>
							</span>

							<p>92 / 100</p>
						</div>
						<div className="flex justify-between py-2 my-6 bg-light-green-teal">
							<span className="flex gap-3">
								<img src={iconVerbal} alt="" />
								<p className="font-hankengrotesk-bold text-green-teal">
									Verbal
								</p>
							</span>

							<p>61 / 100</p>
						</div>
						<div className="flex justify-between py-2 my-6 bg-light-lavender">
							<span className="flex gap-3">
								<img src={iconVisual} alt="" />
								<p className="font-hankengrotesk-bold text-score-lavender">
									Visual
								</p>
							</span>
							<p>72 / 100</p>
						</div>

						<button className="w-full py-4 text-white rounded-full bg-dark-gray-blue">
							Continue
						</button>
					</div>
				</div>
			</div>

			<div className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Your Name Here</a>.
			</div>
		</>
	);
}

export default App;
