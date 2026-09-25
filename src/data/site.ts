export interface ResearchArea {
  title: string;
  description: string;
}

export interface BioSegment {
  text: string;
  href?: string;
}

export interface PublicationLink {
  label: "Paper" | "Project";
  href: string;
}

export interface Publication {
  title: string;
  venue: string;
  role: string;
  selectedOrder?: number;
  summary: string;
  links: PublicationLink[];
}

export interface ExperienceEntry {
  role: string;
  institution: string;
  location?: string;
  dateRange?: string;
  highlights: string[];
}

export interface ContactLink {
  label: string;
  href: string;
}

export const siteData = {
  name: "Haozhe Jia",
  nativeName: "贾浩哲",
  role: "Incoming Ph.D. Student at Peking University",
  affiliation: "EPIC Lab · Research Intern at Galbot",
  email: "202322120230@mail.sdu.edu.cn",
  description: "Haozhe Jia, incoming Ph.D. student at Peking University, EPIC Lab member, and research intern at Galbot. Research in humanoid robot learning and control, generative motion modeling, and physics-grounded generative models.",
  bio: [
    [
      { text: "I am an incoming Ph.D. student at " },
      { text: "Peking University", href: "https://english.pku.edu.cn/" },
      { text: ". I have joined " },
      { text: "EPIC Lab", href: "https://pku-epic.github.io/" },
      { text: ", where I work under the supervision of " },
      { text: "Prof. He Wang", href: "https://hughw19.github.io/" },
      { text: " and " },
      { text: "Prof. Li Yi", href: "https://ericyi.github.io/" },
      { text: ". I am currently a research intern at " },
      { text: "Galbot", href: "https://www.galbot.com/" },
      { text: " and an undergraduate at Shandong University." }
    ],
    [
      { text: "My research focuses on humanoid robot learning and control, particularly on connecting generative motion models with physical execution. I am interested in how robots can translate language instructions into coordinated, physically grounded whole-body behaviors. My work spans motion generation, dynamics-aware representations, and language-conditioned humanoid control." }
    ]
  ] satisfies BioSegment[][],
  researchAreas: [
    {
      title: "Humanoid Learning & Control",
      description: "Translating language instructions into coordinated whole-body behaviors through dynamics-aware representations and robot control."
    },
    {
      title: "Generative Motion Modeling",
      description: "Learning language-conditioned motion representations and generative models for expressive and controllable movement."
    },
    {
      title: "Physics-Grounded Generative Models",
      description: "Incorporating physical structure into generative modeling to improve consistency and generalization."
    }
  ] satisfies ResearchArea[],
  publications: [
    {
      title: "ANT: Adaptive Neural Temporal-Aware Text-to-Motion Model",
      selectedOrder: 4,
      venue: "ACM MM 2025",
      role: "Co-first author",
      summary:
        "Introduces step-aware temporal modulation and late-stage CFG reduction for diffusion motion models, improving semantic alignment and retrieval performance.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2506.02452" }]
    },
    {
      title: "DCTdiff: Intriguing Properties of Image Generative Modeling in the DCT Space",
      venue: "ICML 2025",
      role: "Second co-author",
      summary:
        "Develops an end-to-end diffusion model in DCT space for higher-resolution image generation with stronger efficiency and spectral interpretability.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2412.15032" }]
    },
    {
      title: "Learning to Think in Physics: Breaking Shortcut Learning in Scientific Diffusion via Representation Alignment",
      selectedOrder: 3,
      venue: "ICML 2026",
      role: "First author",
      summary:
        "Proposes REPA-P to align denoising features with physics-aware representations, improving physical consistency and out-of-distribution robustness.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2605.20780" }]
    },
    {
      title: "RMDM: Physics-Informed Representation Alignment for Sparse Radio-Map Reconstruction",
      selectedOrder: 5,
      venue: "ACM MM 2025 Oral",
      role: "First author",
      summary:
        "Combines a PINN-based field initializer with a diffusion refiner to reconstruct sparse radio maps accurately under physically constrained settings.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2501.19160" }]
    },
    {
      title: "ECHO: Edge-Cloud Humanoid Orchestration for Language-to-Motion Control",
      selectedOrder: 2,
      venue: "Under Review",
      role: "First author",
      summary:
        "Connects cloud-based motion generation with on-device closed-loop tracking for language-to-motion humanoid control, validated in simulation and on real hardware.",
      links: [{ label: "Project", href: "https://echo-phi-eight.vercel.app" }]
    },
    {
      title: "Before the Body Moves: Learning Anticipatory Joint Intent for Language-Conditioned Humanoid Control",
      selectedOrder: 1,
      venue: "Under Review",
      role: "First author",
      summary:
        "Introduces dynamics-aligned joint intent representations that anticipate support transfer, contact switching, and balance preparation for streaming language-conditioned humanoid control.",
      links: [{ label: "Project", href: "https://hxxxz0.github.io/DAJI_PAGE/" }]
    },
    {
      title: "LUMA: Low-Dimension Unified Motion Alignment with Dual-Path Anchoring for Text-to-Motion Diffusion Model",
      venue: "Under review at ECCV",
      role: "First author",
      summary:
        "Uses temporal semantic anchors and low-frequency motion anchors to improve deep U-Net alignment, gradient flow, and convergence in diffusion motion synthesis.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2509.25304" }]
    },
    {
      title: "Towards Better Evaluation Metrics for Text-to-Motion Generation",
      venue: "WWW 2026",
      role: "Co-first author",
      summary:
        "Introduces OTMS and MMMD, two evaluation metrics designed to better correlate text-to-motion quality with human judgment.",
      links: [{ label: "Paper", href: "https://doi.org/10.1145/3774905.3794682" }]
    },
    {
      title: "POLARIS: Projection-Orthogonal Least Squares for Robust and Adaptive Inversion in Diffusion Models",
      venue: "arXiv preprint",
      role: "Collaborating author",
      summary:
        "Derives a theoretically grounded projection schedule for diffusion inversion, improving reconstruction quality without substantial extra computation.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2512.00369" }]
    },
    {
      title: "RadioFlow: Efficient Radio Map Construction Framework with Flow Matching",
      venue: "Under review at TCNN",
      role: "First author",
      summary:
        "Uses deterministic flow matching for fast radio map construction, reducing parameter count and inference time while maintaining reconstruction quality.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2510.09314" }]
    },
    {
      title: "Free-T2M: Frequency Enhanced Text-to-Motion Diffusion Model With Consistency Loss",
      venue: "Under review at ICRA",
      role: "First author",
      summary:
        "Introduces frequency-aware consistency supervision to stabilize motion denoising and improve semantic fidelity in diffusion-based text-to-motion generation.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2501.18232" }]
    },
    {
      title: "Guided Path Sampling: Steering Diffusion Models Back on Track with Principled Path Guidance",
      venue: "WWW 2026",
      role: "Collaborating author",
      summary:
        "Applies manifold-aware interpolation and dynamic guidance schedules to keep diffusion sampling closer to valid data trajectories.",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2512.22881" }]
    }
  ] satisfies Publication[],
  experience: [
    {
      role: "Research Intern",
      institution: "Galbot",
      dateRange: "Current",
      highlights: []
    },
    {
      role: "Embodied AI Algorithm Intern",
      institution: "LimX Dynamics",
      location: "Beijing, China",
      dateRange: "2025.12 - present",
      highlights: [
        "Developed ECHO, a language-driven humanoid motion control system with a compact 38-DoF action representation.",
        "Built a cloud-edge streaming pipeline: cloud diffusion generates motion references; on-device lightweight controller performs closed-loop tracking.",
        "Validated in MuJoCo simulation and on real humanoid hardware."
      ]
    },
    {
      role: "Research Assistant",
      institution: "Hong Kong University of Science and Technology (Guangzhou)",
      location: "Guangzhou, China",
      dateRange: "2024.12 - 2025.12",
      highlights: [
        "Led research on PhyRMDM, Free-T2M, and LUMA, spanning radio map reconstruction and text-driven human motion generation.",
        "Owned the full pipeline from model selection and training to ablation design; all code open-sourced.",
        "First-author / co-first-author publications at ICML and ACM MM (Oral)."
      ]
    }
  ] satisfies ExperienceEntry[],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:202322120230@mail.sdu.edu.cn"
    },
    {
      label: "GitHub",
      href: "https://github.com/Hxxxz0"
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=xKAJ2nkAAAAJ"
    }
  ]
} as const;
