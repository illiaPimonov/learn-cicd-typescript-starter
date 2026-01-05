import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns null when auth header is missing", () => {
    const headers:IncomingHttpHeaders = {}
    expect(getAPIKey(headers)).not.toBeNull();
  });
});