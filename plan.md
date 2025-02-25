### Step 1: Initialize Database Schema & Connection  
```text
- Build: Create SQL table for checkins and basic DB connection
- Outcome: Run SHOW TABLES; confirms checkins table exists with fid, streak, last_checkin columns
```

### Step 2: Create Basic Initial Frame  
```text
- Build: GET /initial-frame returning simple image with "Have you said gm today?" + gm button
- Outcome: Visiting endpoint in browser shows correct image & button with POST action to /checkin
```

### Step 3: Implement Checkin Endpoint Skeleton  
```text
- Build: POST /checkin handler that accepts FID and returns dummy response
- Outcome: Curl POST test returns 200 OK with placeholder JSON
```

### Step 4: Core Streak Calculation Logic  
```text
- Build: Implement streak update rules (maintain/inc/reset) in isolation with test cases
- Outcome: Tests pass for: yesterday → +1, today → same, 2 days ago → reset to 1
```

### Step 5: Connect Checkin Endpoint to Database  
```text
- Build: Full checkin flow with DB updates using streak logic
- Outcome: Multiple test checkins show correct streak values in DB table
```

### Step 6: Build Success Frame UI  
```text
- Build: GET /success-frame showing dynamic streak count
- Outcome: Passing ?streak=3 in URL displays "GM! 🔥 3-day streak!"
```

### Step 7: Already Checked-In State Handling  
```text
- Build: Detect same-day checkins and return alternate response
- Outcome: Second checkin within 24h returns "Come back tomorrow!" message
```

### Step 8: Implement Farcaster Message Validation  
```text
- Build: Add @farcaster/core validation to /checkin endpoint
- Outcome: Invalid signatures return 401 error with error frame
```

### Step 9: Error Handling & Fallbacks  
```text
- Build: Add error frames and session cookie fallback
- Outcome: DB outage scenario still shows "GM! (Streak cached)" message
```

### Step 10: Timezone-Aware Day Calculation  
```text
- Build: Daily reset based on UTC with 24h window from first checkin
- Outcome: Test checkins at 23:59 UTC and 00:01 UTC handle rollover correctly
```

### Step 11: Share Button Integration  
```text
- Build: "Share" button with cast action in success frames
- Outcome: Clicking button triggers Farcaster share flow with current streak
```

### Step 12: End-to-End Flow Testing  
```text
- Build: Full integration test simulating user flow
- Outcome: Complete sequence: initial → checkin → success → share works in 1 session
```