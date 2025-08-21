import React from 'react';

const formatNumber = (value) => String(value).padStart(2, '0');

const useCountdown = (targetDate) => {
	const [timeLeft, setTimeLeft] = React.useState(() => {
		const now = new Date();
		const target = new Date(targetDate);
		const diff = Math.max(0, target.getTime() - now.getTime());
		return diff;
	});

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			const now = new Date();
			const target = new Date(targetDate);
			const diff = Math.max(0, target.getTime() - now.getTime());
			setTimeLeft(diff);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [targetDate]);

	const totalSeconds = Math.floor(timeLeft / 1000);
	const days = Math.floor(totalSeconds / (60 * 60 * 24));
	const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
	const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
	const seconds = totalSeconds % 60;

	return { days, hours, minutes, seconds };
};

const SocialIcon = ({ label, children, href }) => (
	<a
		href={href}
		aria-label={label}
		target="_blank"
		rel="noreferrer noopener"
		className="countdown-social-icon"
	>
		{children}
	</a>
);

const PeopleStrip = () => {
	const people = [
		'https://www.pngall.com/wp-content/uploads/12/Happy-Man-PNG.png',
		'https://www.pngall.com/wp-content/uploads/12/Smiling-Woman-PNG.png',
		'https://www.pngall.com/wp-content/uploads/12/Woman-PNG-Picture.png',
		'https://www.pngall.com/wp-content/uploads/12/Happy-Man-PNG-Image.png',
		'https://www.pngall.com/wp-content/uploads/12/Young-Man-PNG.png',
	];

	return (
		<div className="people-strip" role="img" aria-label="Decorative people images">
			{people.map((src, index) => (
				<img key={String(index)} src={src} alt="" loading="lazy" referrerPolicy="no-referrer" />
			))}
		</div>
	);
};

const Countdown = ({ date }) => {
	const { days, hours, minutes, seconds } = useCountdown(date);

	return (
		<div className="countdown-root">
			<div className="countdown-cards">
				<div className="countdown-card">
					<div className="countdown-value">{formatNumber(days)}</div>
					<div className="countdown-label">Days</div>
				</div>
				<div className="countdown-card">
					<div className="countdown-value">{formatNumber(hours)}</div>
					<div className="countdown-label">Hours</div>
				</div>
				<div className="countdown-card">
					<div className="countdown-value">{formatNumber(minutes)}</div>
					<div className="countdown-label">Minutes</div>
				</div>
				<div className="countdown-card">
					<div className="countdown-value">{formatNumber(seconds)}</div>
					<div className="countdown-label">Seconds</div>
				</div>
			</div>

			<div className="countdown-messages">
				<p className="countdown-thanks">Thank you for your patience</p>
				<p className="countdown-follow">Follow us on social media for real time updates</p>
				<div className="countdown-social">
					<SocialIcon label="X (Twitter)" href="https://twitter.com">
						<svg viewBox="0 0 24 24" width="28" height="28" fill="#ff6a6a" aria-hidden="true">
							<path d="M18.244 2H21.5l-7.66 8.746L23.5 22h-7.258l-5.68-6.566L3.5 22H.244l8.202-9.375L.5 2h7.34l5.146 5.943L18.244 2zm-1.27 18h2.047L7.09 3.9H4.93L16.974 20z"/>
						</svg>
					</SocialIcon>
					<SocialIcon label="Instagram" href="https://instagram.com">
						<svg viewBox="0 0 24 24" width="28" height="28" fill="#ff6a6a" aria-hidden="true">
							<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
						</svg>
					</SocialIcon>
					<SocialIcon label="LinkedIn" href="https://linkedin.com">
						<svg viewBox="0 0 24 24" width="28" height="28" fill="#ff6a6a" aria-hidden="true">
							<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.9-2.83 3.88V24h-5V8z"/>
						</svg>
					</SocialIcon>
				</div>
			</div>

			<div className="people-strip-wrapper">
				<PeopleStrip />
			</div>
		</div>
	);
};

export default Countdown;

