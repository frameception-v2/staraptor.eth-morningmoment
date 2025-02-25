#### Setup
- [ ] Task 1: Initialize Database Schema & Connection  
  - Outcome: Run SHOW TABLES; confirms checkins table exists with fid, streak, last_checkin columns

#### Core Features
- [ ] Task 2: Create Basic Initial Frame (GET /initial-frame)  
  - Depends on: Task 1  
  - Outcome: Visiting endpoint shows image with button linking to /checkin
- [ ] Task 3: Implement Checkin Endpoint Skeleton (POST /checkin)  
  - Depends on: Task 1  
  - Outcome: CURL test returns 200 OK with placeholder JSON
- [ ] Task 4: Core Streak Calculation Logic  
  - Depends on: None  
  - Outcome: Tests pass for streak update rules
- [ ] Task 5: Connect Checkin Endpoint to Database  
  - Depends on: Task 3, Task 4, Task 1  
  - Outcome: Test checkins update DB streaks correctly
- [ ] Task 6: Already Checked-In State Handling  
  - Depends on: Task 5  
  - Outcome: Duplicate checkins show "Come back tomorrow" message

#### API Integration
- [ ] Task 7: Implement Farcaster Message Validation  
  - Depends on: Task 3  
  - Outcome: Invalid signatures return 401 error frame

#### UI/UX
- [ ] Task 8: Build Success Frame UI  
  - Depends on: Task 5  
  - Outcome: URL with ?streak=3 displays "GM! 🔥 3-day streak!"
- [ ] Task 9: Error Handling & Fallbacks  
  - Depends on: Task 5  
  - Outcome: Graceful degradation during DB outages
- [ ] Task 10: Timezone-Aware Day Calculation  
  - Depends on: Task 5  
  - Outcome: Streaks update correctly across UTC boundaries
- [ ] Task 11: Share Button Integration  
  - Depends on: Task 8, Task 7  
  - Outcome: Share button triggers Farcaster cast with streak

---

### Implementation Plan Rationale  
**1. Database First**: Establish data persistence layer before any feature logic (Task 1).  
**2. Quick Wins**: Ship visible elements early even with mocked backend (Tasks 2-3) to validate UX.  
**3. Core Flow**: Prioritize streak calculation (Task 4) and checkin-DB integration (Task 5) over edge cases.  
**4. Security Later**: Add Farcaster validation (Task 7) after proving core functionality works.  
**5. Feedback Loop**: Success frame (Task 8) and share button (Task 11) create viral hooks early in testing.