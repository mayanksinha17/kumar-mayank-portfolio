"use client";

import { useEffect, useState } from "react";
import { Github, GitFork, Users, BookMarked, ExternalLink } from "lucide-react";
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

export default function GitHubPanel() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);
        if (!uRes.ok || !rRes.ok) throw new Error("GitHub API unavailable");
        const uData = (await uRes.json()) as GhUser;
        const rData = (await rRes.json()) as GhRepo[];
        if (!cancelled) {
          setUser(uData);
          setRepos(rData);
          setStatus("ok");
        }
      } catch {
        if (!cancelled) setStatus("error");
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
        eyebrow="// GitHub"
        title="Where the code lives"
        subtitle="Live from my public GitHub profile — no fabricated stats."
      />

      <RevealOnScroll delay={0.1} className="mt-10">
        <div className="glass rounded-2xl p-7 md:p-9">
          {status === "loading" && (
            <div className="animate-pulse space-y-4">
              <div className="h-6 w-40 bg-white/10 rounded" />
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-16 bg-white/5 rounded-xl" />
                ))}
              </div>
            </div>
          )}

          {status === "ok" && user && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user.avatar_url}
                    alt=""
                    className="w-14 h-14 rounded-full border-2 border-white/10"
                  />
                  <div>
                    <p className="font-display font-semibold text-white">
                      @{USERNAME}
                    </p>
                    {user.bio && (
                      <p className="text-xs text-muted mt-0.5">{user.bio}</p>
                    )}
                  </div>
                </div>
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-electric to-violet text-white hover:brightness-110 transition focus-ring"
                >
                  <Github size={16} /> View GitHub Profile
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
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-electric/30 transition group focus-ring"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm text-slate-100 truncate">
                            {repo.name}
                          </span>
                          <ExternalLink
                            size={13}
                            className="text-muted group-hover:text-cyan shrink-0 ml-2"
                          />
                        </div>
                        {repo.language && (
                          <span className="mt-2 inline-block text-[11px] text-muted">
                            {repo.language}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {status === "error" && (
            <div className="text-center py-6">
              <Github className="mx-auto text-slate-500 mb-3" size={28} />
              <p className="text-slate-300 font-medium">
                Live stats are unavailable right now.
              </p>
              <p className="text-sm text-muted mt-1">
                Check out my work directly on GitHub instead.
              </p>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-electric to-violet text-white hover:brightness-110 transition focus-ring"
              >
                <Github size={16} /> View GitHub Profile
              </a>
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
