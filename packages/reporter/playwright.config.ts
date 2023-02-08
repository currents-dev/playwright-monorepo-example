import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 10 * 1000,

  expect: {
    timeout: 2000,
  },

  retries: 2,
  workers: 5,

  use: {
    baseURL: "https://playwright.dev/",
    actionTimeout: 0,
    trace: "on",
    video: "on",
    screenshot: "on",
  },
  reporter: [["@currents/playwright"]],
  projects: [
    {
      name: "chromium",

      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "MobileSafari",
      use: {
        ...devices["iPhone 12"],
      },
    },
  ],
};

export default config;
