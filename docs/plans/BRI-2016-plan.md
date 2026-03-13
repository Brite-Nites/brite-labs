# BRI-2016: Add rate limiting to newsletter Server Action

**Issue**: [BRI-2016](https://linear.app/brite-nites/issue/BRI-2016/add-rate-limiting-to-newsletter-server-action)

## Tasks

### T1: Install dependencies
**What**: `npm install @upstash/ratelimit @upstash/redis`
**Verify**: `npm run build` passes

### T2: Add rate limiting to newsletter action
**File**: `src/app/actions/newsletter.ts`
**What**:
- Import `Ratelimit` from `@upstash/ratelimit` and `Redis` from `@upstash/redis`
- Import `headers` from `next/headers`
- Create a sliding window limiter (5 requests per hour per IP)
- Add rate limit check before email validation
- Return error message if rate limited
- Remove the TODO comment about rate limiting
**Verify**: `npm run build` passes, form returns rate limit error after 5 rapid submissions

## Acceptance Criteria
- [ ] Rate limiting active on newsletter Server Action
- [ ] 5 requests per hour per IP (sliding window)
- [ ] Graceful error message when rate limited
- [ ] `npm run build` passes
