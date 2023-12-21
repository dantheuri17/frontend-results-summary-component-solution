
function App() {
	return (
		<>
			<div className="h-screen w-screen grid justify-items-center items-center">
				<div className="grid grid-cols-2 w-3/4 h-[400px]">
					<div className="bg-light-royal-blue flex-col text-white">
						<div className="text-center py-8">
							<p>Your Result</p>
						</div>
						<div className="flex justify-center">
							<div className="bg-red-400 aspect-square w-60 rounded-full flex-col">
								<h1 className="text-center">76</h1>
								<p className="text-center">of 100</p>
							</div>
						</div>
						<div>
							<h3 className="text-center text-2xl">Great</h3>
							<p>
								You scored higher than 65% of the people who have taken these
								tests.
							</p>
						</div>
					</div>
					<div>
						<p>Summary</p>
						<div>
							<p>Reaction 80 / 100</p>
						</div>
						<div>
							<p>Memory 92 / 100</p>
						</div>
						<div>
							<p>Verbal 61 / 100</p>
						</div>
						<div>
							<p>Visual 72 / 100</p>
						</div>

						<button>Continue</button>
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
