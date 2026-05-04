export interface ResearchArea {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  venue: string;
  role: string;
  dateRange: string;
  summary: string;
  href?: string;
}

export interface ExperienceEntry {
  role: string;
  institution: string;
  location: string;
  dateRange: string;
  highlights: string[];
}

export interface ContactLink {
  label: string;
  href: string;
}

export const siteData = {
  name: "Haozhe Jia",
  nativeName: "贾浩哲",
  role: "Undergraduate Researcher in Embodied AI",
  affiliation: "Shandong University",
  location: "Qingdao, China",
  email: "202322120230@mail.sdu.edu.cn",
  introLabel: "Academic homepage",
  headline: "Researching embodied intelligence with generative and multimodal methods.",
  deck: "I am an undergraduate researcher at Shandong University working on embodied AI, generative motion models, and robot control. I am interested in a simple but stubborn question: how can we make AI-generated motion not only look good on a screen, but also stand up, stay balanced, and actually move a robot? My work explores diffusion models, flow matching, and dynamics-aligned representations for humanoid motion generation, whole-body control, and cross-modal understanding, aiming to bridge language, motion, and physical execution in the real world.",
  bio: [
    "I am an undergraduate researcher at Shandong University working on embodied AI, generative motion models, and robot control. I am interested in a simple but stubborn question: how can we make AI-generated motion not only look good on a screen, but also stand up, stay balanced, and actually move a robot?",
    "My work explores diffusion models, flow matching, and dynamics-aligned representations for humanoid motion generation, whole-body control, and cross-modal understanding, aiming to bridge language, motion, and physical execution in the real world."
  ],
  facts: [
    "Research Assistant at HKUST(GZ)",
    "Focus on embodied AI, diffusion, and multimodal alignment"
  ],
  researchAreas: [
    {
      title: "Text-to-Motion Generation",
      description:
        "Designing diffusion-based motion models with stronger semantic alignment, temporal awareness, and frequency-aware supervision."
    },
    {
      title: "Scientific and Physics-Informed Diffusion",
      description:
        "Studying representation alignment and physically grounded guidance so diffusion models generalize beyond surface statistical shortcuts."
    },
    {
      title: "Wireless Scene Modeling",
      description:
        "Building efficient radio map reconstruction frameworks with diffusion and flow matching under sparse measurements and noisy conditions."
    },
    {
      title: "Embodied Control Systems",
      description:
        "Developing deployable language-to-motion pipelines for humanoid robots with compact motion representations and edge-cloud orchestration."
    }
  ],
  publications: [
    {
      title: "ANT: Adaptive Neural Temporal-Aware Text-to-Motion Model",
      venue: "ACM MM 2025",
      role: "Co-first author",
      dateRange: "2025.03 - 2025.06",
      summary:
        "Introduces step-aware temporal modulation and late-stage CFG reduction for diffusion motion models, improving semantic alignment and retrieval performance.",
      href: "https://arxiv.org/abs/2506.02452"
    },
    {
      title: "DCTdiff: Intriguing Properties of Image Generative Modeling in the DCT Space",
      venue: "ICML 2025",
      role: "Second co-author",
      dateRange: "2024.08 - 2024.12",
      summary:
        "Develops an end-to-end diffusion model in DCT space for higher-resolution image generation with stronger efficiency and spectral interpretability.",
      href: "https://arxiv.org/abs/2412.15032"
    },
    {
      title: "Learning to Think in Physics: Breaking Shortcut Learning in Scientific Diffusion via Representation Alignment",
      venue: "ICML 2026",
      role: "First author",
      dateRange: "2025.10 - 2025.12",
      summary:
        "Proposes REPA-P to align denoising features with physics-aware representations, improving physical consistency and out-of-distribution robustness."
    },
    {
      title: "RMDM: Physics-Informed Representation Alignment for Sparse Radio-Map Reconstruction",
      venue: "ACM MM 2025 Oral",
      role: "First author",
      dateRange: "2024.05 - 2024.10",
      summary:
        "Combines a PINN-based field initializer with a diffusion refiner to reconstruct sparse radio maps accurately under physically constrained settings.",
      href: "https://arxiv.org/abs/2501.19160"
    },
    {
      title: "ECHO: Edge-Cloud Humanoid Orchestration for Language-to-Motion Control",
      venue: "Target: IROS",
      role: "First author",
      dateRange: "2025.10 - present",
      summary:
        "Builds an edge-cloud language-to-motion system where a diffusion generator proposes robot-native trajectories and a lightweight controller tracks them in simulation and hardware.",
      href: "https://arxiv.org/pdf/2603.16188"
    },
    {
      title: "LUMA: Low-Dimension Unified Motion Alignment with Dual-Path Anchoring for Text-to-Motion Diffusion Model",
      venue: "Under review at ECCV",
      role: "First author",
      dateRange: "2025.06 - 2025.08",
      summary:
        "Uses temporal semantic anchors and low-frequency motion anchors to improve deep U-Net alignment, gradient flow, and convergence in diffusion motion synthesis.",
      href: "https://arxiv.org/abs/2509.25304"
    },
    {
      title: "Towards Better Evaluation Metrics for Text-to-Motion Generation",
      venue: "WWW 2026",
      role: "Co-first author",
      dateRange: "2025.05 - 2025.07",
      summary:
        "Introduces OTMS and MMMD, two evaluation metrics designed to better correlate text-to-motion quality with human judgment.",
      href: "https://arxiv.org/abs/2511.02987"
    },
    {
      title: "POLARIS: Projection-Orthogonal Least Squares for Robust and Adaptive Inversion in Diffusion Models",
      venue: "arXiv preprint",
      role: "Collaborating author",
      dateRange: "2025.03 - 2025.06",
      summary:
        "Derives a theoretically grounded projection schedule for diffusion inversion, improving reconstruction quality without substantial extra computation.",
      href: "https://arxiv.org/abs/2512.00369"
    },
    {
      title: "RadioFlow: Efficient Radio Map Construction Framework with Flow Matching",
      venue: "Under review at TCNN",
      role: "First author",
      dateRange: "2025.02 - 2025.06",
      summary:
        "Uses deterministic flow matching for fast radio map construction, reducing parameter count and inference time while maintaining reconstruction quality.",
      href: "https://arxiv.org/abs/2510.09314"
    },
    {
      title: "Free-T2M: Frequency Enhanced Text-to-Motion Diffusion Model With Consistency Loss",
      venue: "Under review at ICRA",
      role: "First author",
      dateRange: "2024.09 - 2025.03",
      summary:
        "Introduces frequency-aware consistency supervision to stabilize motion denoising and improve semantic fidelity in diffusion-based text-to-motion generation.",
      href: "https://arxiv.org/abs/2501.18232"
    },
    {
      title: "Guided Path Sampling: Steering Diffusion Models Back on Track with Principled Path Guidance",
      venue: "WWW 2026",
      role: "Collaborating author",
      dateRange: "2024.09 - 2025.02",
      summary:
        "Applies manifold-aware interpolation and dynamic guidance schedules to keep diffusion sampling closer to valid data trajectories.",
      href: "https://arxiv.org/abs/2512.22881"
    }
  ],
  experience: [
    {
      role: "Research Assistant",
      institution: "Hong Kong University of Science and Technology (Guangzhou)",
      location: "Guangzhou, China",
      dateRange: "2024.12 - present",
      highlights: [
        "Leading research and implementation across PhyRMDM, Free-T2M, and LUMA, spanning radio map reconstruction and text-driven human motion generation.",
        "Responsible for model selection, training pipelines, and ablation design with a strong focus on reproducibility and open implementation."
      ]
    }
  ],
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
