import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { HeroTreeVideo } from "@/components/site/HeroTreeVideo";
import { DEFAULT_APP_LOGIN_URL } from "@/lib/app-login-url";

const appHref = process.env.NEXT_PUBLIC_APP_LOGIN_URL ?? DEFAULT_APP_LOGIN_URL;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-400/90">{children}</p>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black text-zinc-100">
        {/* Hero — single CTA, centered */}
        <section className="relative overflow-hidden compute-glow">
          <div className="pointer-events-none absolute inset-0 compute-grid opacity-60" />
          <div className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-rose-600/20 blur-[120px]" />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center sm:px-6">
            <p className="font-mono text-sm text-zinc-500">
              — B2B SaaS platform that lets companies upload internal documents and provides employees with an
              AI chatbot that answers questions strictly from those documents.
            </p>
            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              <span className="headline-muted block">Internal knowledge,</span>
              <span className="mt-2 block text-white">answered from your own documents.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-500">
              Multi-tenant workspaces, grounded responses, citations to sources, and controls designed for
              organizations that need answers without drifting into outside information.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-zinc-500">
              <span>Your documents only</span>
              <span className="hidden sm:inline text-zinc-700">·</span>
              <span>Company-by-company isolation</span>
              <span className="hidden sm:inline text-zinc-700">·</span>
              <span>Citations on answers</span>
            </div>
            <div className="mt-14">
              <Link
                href={appHref}
                className="inline-flex rounded-full bg-white px-10 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Open app
              </Link>
            </div>
            <div className="relative mt-8 w-full max-w-6xl px-1 sm:px-0">
              <HeroTreeVideo />
            </div>
          </div>
        </section>

        <section id="capabilities" className="scroll-mt-24 border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Grounded answers.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-zinc-500">
              Give employees a chat experience that pulls from what you uploaded—so responses stay aligned
              with your internal policies, handbooks, and files.
            </p>
            <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                <p className="font-mono text-sm text-rose-300/90">01</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Answers from your corpus</h3>
                <p className="mt-3 text-zinc-500">
                  The assistant is designed to answer from your company documents—not from the open
                  internet—so guidance stays consistent with what you have approved internally.
                </p>
              </div>
              <div className="space-y-6 text-zinc-500">
                <p>
                  <span className="text-white">Multi-tenant</span> — each company has isolated data, no
                  cross-company leakage.
                </p>
                <p>
                  <span className="text-white">Document upload</span> — PDF, DOCX, TXT, Excel.
                </p>
                <p>
                  <span className="text-white">Chatbot</span> — answers grounded only in company documents with
                  citations.
                </p>
                <p>
                  <span className="text-white">Anti-hallucination</span> — strict prompting ensures AI never
                  uses external knowledge.
                </p>
                <p>
                  <span className="text-white">Citation system</span> — every answer links to source documents
                  with highlighted chunks.
                </p>
                <p>
                  <span className="text-white">Team management</span> — admins can invite employees.
                </p>
                <p>
                  <span className="text-white">GDPR-ready</span> — company data deletion; no training on user
                  data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 border-t border-white/[0.06] bg-zinc-950/40 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Upload. Ask. Review.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Upload",
                  d: "Add the documents your teams should rely on—PDF, Word, plain text, and Excel.",
                },
                {
                  n: "02",
                  t: "Ask",
                  d: "Employees ask questions in natural language inside the chat experience.",
                },
                {
                  n: "03",
                  t: "Review",
                  d: "Get answers with citations so people can verify details against the source material.",
                },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/[0.08] p-8">
                  <p className="font-mono text-sm text-rose-300/90">{s.n}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="boundary" className="scroll-mt-24 border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>Your company</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Isolation by design.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-zinc-500">
              Each organization operates in its own boundary: internal knowledge stays scoped to the
              company, with retrieval and access aligned to that separation.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { k: "Tenant isolation", v: "Company-scoped data separation." },
                { k: "Controlled access", v: "Admins manage membership and workspace entry." },
                { k: "Grounded retrieval", v: "Search and answering stay within the tenant corpus." },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/[0.08] p-6">
                  <p className="text-sm font-medium text-white">{x.k}</p>
                  <p className="mt-2 text-sm text-zinc-500">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metrics" className="scroll-mt-24 border-t border-white/[0.06] bg-zinc-950/40 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>Trust</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Built for accountability.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: "Citation-backed responses",
                  d: "See where an answer came from so teams can validate quickly.",
                },
                {
                  t: "Internal-first answers",
                  d: "Designed to prioritize your uploaded knowledge over outside speculation.",
                },
                {
                  t: "Governance-friendly posture",
                  d: "Supports organizational controls around data handling and deletion.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/[0.08] p-8">
                  <h3 className="text-lg font-semibold text-white">{x.t}</h3>
                  <p className="mt-3 text-sm text-zinc-500">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formats" className="scroll-mt-24 border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>Formats</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Bring your documents as they are.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-zinc-500">
              Upload common office formats so internal knowledge doesn’t need to be reformatted before it
              becomes searchable and usable in chat.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["PDF", "DOCX", "TXT", "Excel"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-10 text-center"
                >
                  <p className="text-sm font-semibold tracking-wide text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="scroll-mt-24 border-t border-white/[0.06] bg-zinc-950/40 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>Security</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Powerful, with boundaries.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-zinc-500">
              The product is built around constraints that matter for internal knowledge: isolation, access
              control, and traceability.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  t: "Isolated workspaces",
                  d: "Keep each organization’s knowledge separate end-to-end.",
                },
                {
                  t: "No training on your tenant data",
                  d: "Designed so your company content is not used to train public models.",
                },
                {
                  t: "Deletion when required",
                  d: "Supports company data deletion workflows for compliance-oriented teams.",
                },
                {
                  t: "Permission-aware collaboration",
                  d: "Admins invite employees; access stays within the workspace model.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/[0.08] p-8">
                  <h3 className="text-lg font-semibold text-white">{x.t}</h3>
                  <p className="mt-3 text-sm text-zinc-500">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="employees" className="scroll-mt-24 border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>Employees</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Simple for the people who ask questions.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-zinc-500">
              The experience is meant to feel like a focused internal assistant: ask, get an answer, and
              jump to the cited material when you need certainty.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  t: "Natural-language questions",
                  d: "Employees ask the way they would ask a knowledgeable colleague.",
                },
                {
                  t: "Citations for verification",
                  d: "See which documents support the response.",
                },
                {
                  t: "Administration for teams",
                  d: "Invite people and manage access from an admin-oriented workflow.",
                },
                {
                  t: "A single place for internal Q&A",
                  d: "Reduce repeated questions by centralizing answers around your uploaded knowledge.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/[0.08] p-8">
                  <h3 className="text-lg font-semibold text-white">{x.t}</h3>
                  <p className="mt-3 text-sm text-zinc-500">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="included" className="scroll-mt-24 border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionLabel>What’s included</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Everything your workspace needs.
            </h2>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Core experience",
                  items: [
                    "Document upload for common formats",
                    "Chat that answers from your uploads",
                    "Citations to sources",
                    "Strict internal grounding",
                  ],
                },
                {
                  title: "Team operations",
                  items: ["Multi-tenant isolation", "Admin invites for employees", "Workspace access model"],
                },
                {
                  title: "Governance",
                  items: ["Company data deletion support", "No training on your tenant data (by design)"],
                },
              ].map((col) => (
                <div key={col.title} className="rounded-2xl border border-white/[0.08] p-8">
                  <h3 className="text-lg font-semibold text-white">{col.title}</h3>
                  <ul className="mt-6 space-y-3 text-sm text-zinc-500">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/80" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-zinc-950/40 py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to use your internal knowledge?
            </h2>
            <p className="mt-4 text-lg text-zinc-500">
              Continue in the app to upload documents, invite your team, and start asking questions with
              citations.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
