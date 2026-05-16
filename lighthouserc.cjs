module.exports = {
  ci: {
    collect: {
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/servicios",
        "http://127.0.0.1:3000/casos",
      ],
      numberOfRuns: 1,
      settings: {
        // Simulate a mid-range mobile device (Lighthouse default)
        preset: "desktop",
        // Skip PWA audits — not relevant for this site
        skipAudits: ["installable-manifest", "service-worker", "splash-screen", "themed-omnibox", "maskable-icon"],
      },
    },
    assert: {
      assertions: {
        "categories:performance":     ["warn",  { minScore: 0.8  }],
        "categories:accessibility":   ["error", { minScore: 0.9  }],
        "categories:best-practices":  ["error", { minScore: 0.9  }],
        "categories:seo":             ["error", { minScore: 0.9  }],
        // Core Web Vitals budgets
        "first-contentful-paint":     ["warn",  { maxNumericValue: 2000 }],
        "largest-contentful-paint":   ["warn",  { maxNumericValue: 3500 }],
        "total-blocking-time":        ["warn",  { maxNumericValue: 300  }],
        "cumulative-layout-shift":    ["warn",  { maxNumericValue: 0.1  }],
        "interactive":                ["warn",  { maxNumericValue: 4000 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
