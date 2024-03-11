import { test, expect } from "next/experimental/testmode/playwright";

test("/", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === "https://jsonplaceholder.typicode.com/posts/1") {
      return new Response(
        JSON.stringify({
          title: "____TITLE____",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return "abort";
  });

  await page.goto("http://localhost:3000/");

  await expect(page.locator("body")).toHaveText(/____TITLE____/);
});
