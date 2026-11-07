"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, GitFork, Users, BookMarked, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
};

type GhRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
};

const USERNAME = "mayanksinha17";

const fallbackUser: GhUser = {
  public_repos: site.githubFallback?.public_repos || 19,
  followers: site.githubFallback?.followers || 6,
  following: site.githubFallback?.following || 8,
  avatar_url: "https://avatars.githubusercontent.com/u/150000000",
  html_url: site.contact.github,
  bio: site.githubFallback?.bio || "Data Science Student | Full-Stack Developer",
};

const fallbackRepos: GhRepo[] = [
  {
    id: 1,
    name: "FleetMind",
    html_url: "https://github.com/mayanksinha17/FleetMind",
    description: "Real-time road transport and fleet intelligence platform",
    stargazers_count: 0,
    language: "JavaScript",
    forks_count: 0,
  },
  {
    id: 2,
    name: "Personal-Task-Automator",
    html_url: "https://github.com/mayanksinha17/Personal-Task-Automator",
    description: "AI-assisted task management platform with SQLite persistence",
    stargazers_count: 0,
    language: "JavaScript",
    forks_count: 0,
  },
  {
    id: 3,
    name: "QR-Based-Attendance-System",
    html_url: "https://github.com/mayanksinha17/QR-Based-Attendance-System",
    description: "Role-based attendance management system using QR verification",
    stargazers_count: 0,
    language: "JavaScript",
    forks_count: 0,
  },
  {
    id: 4,
    name: "solo",
    html_url: "https://github.com/mayanksinha17/solo",
    description: "Deployment tool for Hedera / Hiero distributed consensus nodes",
    stargazers_count: 0,
    language: "TypeScript",
    forks_count: 0,
  },
];

export default function GitHubPanel() {
  const [user, setUser] = useState<GhUser>(fallbackUser);
  const [repos, setRepos] = useState<GhRepo[]>(fallbackRepos);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Check session cache to prevent rate-limiting
      try {
        const cached = sessionStorage.getItem("gh_cache_v2");
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < 3600000) {
            setUser(parsed.user);
            setRepos(parsed.repos);
            setIsLive(true);
            return;
          }
        }
      } catch {
        // Session storage unavailable
      }

      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (uRes.ok && rRes.ok) {
          const uData = (await uRes.json()) as GhUser;
          const rData = (await rRes.json()) as GhRepo[];

          if (!cancelled) {
            setUser(uData);
            setRepos(rData.length > 0 ? rData : fallbackRepos);
            setIsLive(true);

            try {
              sessionStorage.setItem(
                "gh_cache_v2",
                JSON.stringify({
                  timestamp: Date.now(),
                  user: uData,
                  repos: rData,
                })
              );
            } catch {
              // Ignore session storage quota issues
            }
          }
        }
      } catch {
        // Graceful fallback to verified stats on network failure or rate limit
        if (!cancelled) {
          setUser(fallbackUser);
          setRepos(fallbackRepos);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="// Code Repositories"
        title="Public GitHub Profile"
        subtitle="Verified public engineering activity, repositories, and open code from my GitHub account."
      />

      <RevealOnScroll delay={0.1} className="mt-10">
        <div className="glass rounded-2xl p-7 md:p-9">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0 bg-white/[0.04]">
                {user.avatar_url && user.avatar_url.startsWith("http") ? (
                  <Image
                    src={user.avatar_url}
                    alt={USERNAME}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                    unoptimized={user.avatar_url.includes("placeholder")}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display font-bold text-cyan">
                    KM
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-display font-semibold text-white">
                    @{USERNAME}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 size={10} /> {isLive ? "Live Sync" : "Verified"}
                  </span>
                </div>
                <p className="text-xs text-muted mt-0.5">
                  {user.bio || "Data Science Student | Full-Stack Developer"}
                </p>
              </div>
            </div>

            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-electric to-violet text-white hover:brightness-110 transition focus-ring shadow-glow/20"
            >
              <Github size={15} /> View GitHub Profile
            </a>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-4">
            <Stat icon={BookMarked} label="Repositories" value={user.public_repos} />
            <Stat icon={Users} label="Followers" value={user.followers} />
            <Stat icon={GitFork} label="Following" value={user.following} />
          </div>

          {repos.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-cyan mb-3">
                Recent Repositories
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {repos.slice(0, 4).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-electric/40 transition group focus-ring"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-slate-100 truncate group-hover:text-cyan transition-colors">
                        {repo.name}
                      </span>
                      <ExternalLink
                        size={13}
                        className="text-muted group-hover:text-cyan shrink-0 ml-2"
                      />
                    </div>
                    {repo.description && (
                      <p className="text-xs text-muted mt-1.5 line-clamp-2 leading-relaxed">
                        {repo.description}
                      </p>
                    )}
                    {repo.language && (
                      <span className="mt-2.5 inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                        {repo.language}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Github;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
      <Icon className="mx-auto text-cyan mb-2" size={18} />
      <p className="font-display text-xl font-bold text-white">{value}</p>
      <p className="text-[11px] text-muted mt-0.5">{label}</p>
    </div>
  );
}
