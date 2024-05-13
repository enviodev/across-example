import assert from "assert";
import { 
  TestHelpers,
  EventsSummaryEntity,
  Base_SpokePool_AdminChangedEntity
} from "generated";
const { MockDb, Base_SpokePool, Addresses } = TestHelpers;

import { GLOBAL_EVENTS_SUMMARY_KEY } from "../src/EventHandlers";


const MOCK_EVENTS_SUMMARY_ENTITY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  base_SpokePool_AdminChangedCount: BigInt(0),
  base_SpokePool_BeaconUpgradedCount: BigInt(0),
  base_SpokePool_EmergencyDeleteRootBundleCount: BigInt(0),
  base_SpokePool_EnabledDepositRouteCount: BigInt(0),
  base_SpokePool_ExecutedRelayerRefundRootCount: BigInt(0),
  base_SpokePool_FilledV3RelayCount: BigInt(0),
  base_SpokePool_InitializedCount: BigInt(0),
  base_SpokePool_PausedDepositsCount: BigInt(0),
  base_SpokePool_PausedFillsCount: BigInt(0),
  base_SpokePool_RelayedRootBundleCount: BigInt(0),
  base_SpokePool_RequestedSpeedUpV3DepositCount: BigInt(0),
  base_SpokePool_RequestedV3SlowFillCount: BigInt(0),
  base_SpokePool_SetHubPoolCount: BigInt(0),
  base_SpokePool_SetL1GasCount: BigInt(0),
  base_SpokePool_SetL2TokenBridgeCount: BigInt(0),
  base_SpokePool_SetXDomainAdminCount: BigInt(0),
  base_SpokePool_TokensBridgedCount: BigInt(0),
  base_SpokePool_UpgradedCount: BigInt(0),
  base_SpokePool_V3FundsDepositedCount: BigInt(0),
};

describe("Base_SpokePool contract AdminChanged event tests", () => {
  // Create mock db
  const mockDbInitial = MockDb.createMockDb();

  // Add mock EventsSummaryEntity to mock db
  const mockDbFinal = mockDbInitial.entities.EventsSummary.set(
    MOCK_EVENTS_SUMMARY_ENTITY
  );

  // Creating mock Base_SpokePool contract AdminChanged event
  const mockBase_SpokePoolAdminChangedEvent = Base_SpokePool.AdminChanged.createMockEvent({
    previousAdmin: Addresses.defaultAddress,
    newAdmin: Addresses.defaultAddress,
    mockEventData: {
      chainId: 1,
      blockNumber: 0,
      blockTimestamp: 0,
      blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      srcAddress: Addresses.defaultAddress,
      transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      transactionIndex: 0,
      logIndex: 0,
    },
  });

  // Processing the event
  const mockDbUpdated = Base_SpokePool.AdminChanged.processEvent({
    event: mockBase_SpokePoolAdminChangedEvent,
    mockDb: mockDbFinal,
  });

  it("Base_SpokePool_AdminChangedEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualBase_SpokePoolAdminChangedEntity = mockDbUpdated.entities.Base_SpokePool_AdminChanged.get(
      mockBase_SpokePoolAdminChangedEvent.transactionHash +
        mockBase_SpokePoolAdminChangedEvent.logIndex.toString()
    );

    // Creating the expected entity
    const expectedBase_SpokePoolAdminChangedEntity: Base_SpokePool_AdminChangedEntity = {
      id:
        mockBase_SpokePoolAdminChangedEvent.transactionHash +
        mockBase_SpokePoolAdminChangedEvent.logIndex.toString(),
      previousAdmin: mockBase_SpokePoolAdminChangedEvent.params.previousAdmin,
      newAdmin: mockBase_SpokePoolAdminChangedEvent.params.newAdmin,
      eventsSummary: "GlobalEventsSummary",
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBase_SpokePoolAdminChangedEntity, expectedBase_SpokePoolAdminChangedEntity, "Actual Base_SpokePoolAdminChangedEntity should be the same as the expectedBase_SpokePoolAdminChangedEntity");
  });

  it("EventsSummaryEntity is updated correctly", () => {
    // Getting the actual entity from the mock database
    let actualEventsSummaryEntity = mockDbUpdated.entities.EventsSummary.get(
      GLOBAL_EVENTS_SUMMARY_KEY
    );

    // Creating the expected entity
    const expectedEventsSummaryEntity: EventsSummaryEntity = {
      ...MOCK_EVENTS_SUMMARY_ENTITY,
      base_SpokePool_AdminChangedCount: MOCK_EVENTS_SUMMARY_ENTITY.base_SpokePool_AdminChangedCount + BigInt(1),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEventsSummaryEntity, expectedEventsSummaryEntity, "Actual Base_SpokePoolAdminChangedEntity should be the same as the expectedBase_SpokePoolAdminChangedEntity");
  });
});
