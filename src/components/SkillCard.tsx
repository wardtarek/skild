import { Link } from "@tanstack/react-router";
import {
	ArrowBigLeft,
	ArrowBigUp,
	ArrowRight,
	Bookmark,
	Check,
	Copy,
	MessagesSquare,
} from "lucide-react";
import { useState } from "react";

function SkillCard({
	autherEmail,
	category,
	createdAt,
	description,
	installCommand,
	tags,
	title,
}: SkillRecord) {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(installCommand);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};
	return (
		<article className="skill-card">
			<Link
				to="/skills"
				tabIndex={-1}
				aria-label={`Open ${title}`}
				className="overlay"
			/>
			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red" />
						<div className="light amber" />
						<div className="light green" />
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>
			<div className="body">
				<div className="meta">
					<div className="auther">
						<img src="/logo512.png" alt="auther avatar" className="avatar" />
						<div className="auther-copy">
							<p>Adrian</p>
							<p>{new Date(createdAt as string).toLocaleDateString()}</p>
						</div>
					</div>
					<p className="category">{category}</p>
				</div>
				<div className="summary">
					<Link to="/skills" className="title0link">
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>
				<div className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{installCommand}</p>
					</div>
					<button
						type="button"
						className="copy cursor-pointer"
						onClick={handleCopy}
						aria-label="Copy install command"
					>
						{copied ? <Check size={16} /> : <Copy size={16} />}
					</button>
				</div>

				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUp size={16} fill="current-color" />
							<span>{tags.length}</span>
						</button>
						<div className="comments">
							<MessagesSquare size={14} />
							<span>{autherEmail ? 1 : 0}</span>
						</div>
					</div>

					<div className="actions">
						<Link to="/skills" className="open" title={`Open ${title}`}>
							<span>Open</span>
							<ArrowRight size={14} />
						</Link>
						<button
							type="button"
							className="save"
							aria-label="Saved state"
							disabled
						>
							<Bookmark size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}

export default SkillCard;
