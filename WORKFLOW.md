# Workflow Reference

## Core chain
1. Incident Discovery
2. Verification
3. Decision
4. Resource Matching
5. Task
6. Dispatch
7. Field Feedback
8. Coordination
9. Resolution
10. Closure
11. Archive / Reporting

## Example state model
NEW → VERIFYING → VERIFIED → DISPATCHED → IN_PROGRESS → FEEDBACK_RECEIVED → RESOLVED → CLOSED

Alternative paths:
- VERIFYING → MORE_INFORMATION_REQUIRED → VERIFYING
- VERIFYING → FALSE_ALARM → CLOSED

## Matching rule
Capability + Availability + Distance + Priority

The MVP uses transparent illustrative rules rather than an opaque optimization engine.

## Design principle
Local organizations, roles, resource types, policies and terminology should be configuration—not hard-coded country assumptions.
