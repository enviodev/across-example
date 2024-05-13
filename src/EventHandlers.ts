/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  Base_SpokePoolContract,
    Base_SpokePool_AdminChangedEntity,
    Base_SpokePool_BeaconUpgradedEntity,
    Base_SpokePool_EmergencyDeleteRootBundleEntity,
    Base_SpokePool_EnabledDepositRouteEntity,
    Base_SpokePool_ExecutedRelayerRefundRootEntity,
    Base_SpokePool_FilledV3RelayEntity,
    Base_SpokePool_InitializedEntity,
    Base_SpokePool_PausedDepositsEntity,
    Base_SpokePool_PausedFillsEntity,
    Base_SpokePool_RelayedRootBundleEntity,
    Base_SpokePool_RequestedSpeedUpV3DepositEntity,
    Base_SpokePool_RequestedV3SlowFillEntity,
    Base_SpokePool_SetHubPoolEntity,
    Base_SpokePool_SetL1GasEntity,
    Base_SpokePool_SetL2TokenBridgeEntity,
    Base_SpokePool_SetXDomainAdminEntity,
    Base_SpokePool_TokensBridgedEntity,
    Base_SpokePool_UpgradedEntity,
    Base_SpokePool_V3FundsDepositedEntity,
EventsSummaryEntity
} from "generated";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
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

    Base_SpokePoolContract.AdminChanged.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.AdminChanged.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_AdminChangedCount: currentSummaryEntity.base_SpokePool_AdminChangedCount + BigInt(1),
  };

  const base_SpokePool_AdminChangedEntity: Base_SpokePool_AdminChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousAdmin: event.params.previousAdmin      ,
      newAdmin: event.params.newAdmin      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_AdminChanged.set(base_SpokePool_AdminChangedEntity);
});
    Base_SpokePoolContract.BeaconUpgraded.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.BeaconUpgraded.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_BeaconUpgradedCount: currentSummaryEntity.base_SpokePool_BeaconUpgradedCount + BigInt(1),
  };

  const base_SpokePool_BeaconUpgradedEntity: Base_SpokePool_BeaconUpgradedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      beacon: event.params.beacon      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_BeaconUpgraded.set(base_SpokePool_BeaconUpgradedEntity);
});
    Base_SpokePoolContract.EmergencyDeleteRootBundle.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.EmergencyDeleteRootBundle.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_EmergencyDeleteRootBundleCount: currentSummaryEntity.base_SpokePool_EmergencyDeleteRootBundleCount + BigInt(1),
  };

  const base_SpokePool_EmergencyDeleteRootBundleEntity: Base_SpokePool_EmergencyDeleteRootBundleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      rootBundleId: event.params.rootBundleId      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_EmergencyDeleteRootBundle.set(base_SpokePool_EmergencyDeleteRootBundleEntity);
});
    Base_SpokePoolContract.EnabledDepositRoute.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.EnabledDepositRoute.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_EnabledDepositRouteCount: currentSummaryEntity.base_SpokePool_EnabledDepositRouteCount + BigInt(1),
  };

  const base_SpokePool_EnabledDepositRouteEntity: Base_SpokePool_EnabledDepositRouteEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      originToken: event.params.originToken      ,
      destinationChainId: event.params.destinationChainId      ,
      enabled: event.params.enabled      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_EnabledDepositRoute.set(base_SpokePool_EnabledDepositRouteEntity);
});
    Base_SpokePoolContract.ExecutedRelayerRefundRoot.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.ExecutedRelayerRefundRoot.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_ExecutedRelayerRefundRootCount: currentSummaryEntity.base_SpokePool_ExecutedRelayerRefundRootCount + BigInt(1),
  };

  const base_SpokePool_ExecutedRelayerRefundRootEntity: Base_SpokePool_ExecutedRelayerRefundRootEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      amountToReturn: event.params.amountToReturn      ,
      chainId: event.params.chainId      ,
      refundAmounts: event.params.refundAmounts      ,
      rootBundleId: event.params.rootBundleId      ,
      leafId: event.params.leafId      ,
      l2TokenAddress: event.params.l2TokenAddress      ,
      refundAddresses: event.params.refundAddresses      ,
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_ExecutedRelayerRefundRoot.set(base_SpokePool_ExecutedRelayerRefundRootEntity);
});
    Base_SpokePoolContract.FilledV3Relay.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.FilledV3Relay.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_FilledV3RelayCount: currentSummaryEntity.base_SpokePool_FilledV3RelayCount + BigInt(1),
  };

  const base_SpokePool_FilledV3RelayEntity: Base_SpokePool_FilledV3RelayEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      inputToken: event.params.inputToken      ,
      outputToken: event.params.outputToken      ,
      inputAmount: event.params.inputAmount      ,
      outputAmount: event.params.outputAmount      ,
      repaymentChainId: event.params.repaymentChainId      ,
      originChainId: event.params.originChainId      ,
      depositId: event.params.depositId      ,
      fillDeadline: event.params.fillDeadline      ,
      exclusivityDeadline: event.params.exclusivityDeadline      ,
      exclusiveRelayer: event.params.exclusiveRelayer      ,
      relayer: event.params.relayer      ,
      depositor: event.params.depositor      ,
      recipient: event.params.recipient      ,
      message: event.params.message      ,
      relayExecutionInfo_0: event.params.relayExecutionInfo
          [0]
      ,
      relayExecutionInfo_1: event.params.relayExecutionInfo
          [1]
      ,
      relayExecutionInfo_2: event.params.relayExecutionInfo
          [2]
      ,
      relayExecutionInfo_3: event.params.relayExecutionInfo
          [3]
      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_FilledV3Relay.set(base_SpokePool_FilledV3RelayEntity);
});
    Base_SpokePoolContract.Initialized.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.Initialized.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_InitializedCount: currentSummaryEntity.base_SpokePool_InitializedCount + BigInt(1),
  };

  const base_SpokePool_InitializedEntity: Base_SpokePool_InitializedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      version: event.params.version      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_Initialized.set(base_SpokePool_InitializedEntity);
});
    Base_SpokePoolContract.PausedDeposits.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.PausedDeposits.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_PausedDepositsCount: currentSummaryEntity.base_SpokePool_PausedDepositsCount + BigInt(1),
  };

  const base_SpokePool_PausedDepositsEntity: Base_SpokePool_PausedDepositsEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      isPaused: event.params.isPaused      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_PausedDeposits.set(base_SpokePool_PausedDepositsEntity);
});
    Base_SpokePoolContract.PausedFills.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.PausedFills.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_PausedFillsCount: currentSummaryEntity.base_SpokePool_PausedFillsCount + BigInt(1),
  };

  const base_SpokePool_PausedFillsEntity: Base_SpokePool_PausedFillsEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      isPaused: event.params.isPaused      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_PausedFills.set(base_SpokePool_PausedFillsEntity);
});
    Base_SpokePoolContract.RelayedRootBundle.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.RelayedRootBundle.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_RelayedRootBundleCount: currentSummaryEntity.base_SpokePool_RelayedRootBundleCount + BigInt(1),
  };

  const base_SpokePool_RelayedRootBundleEntity: Base_SpokePool_RelayedRootBundleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      rootBundleId: event.params.rootBundleId      ,
      relayerRefundRoot: event.params.relayerRefundRoot      ,
      slowRelayRoot: event.params.slowRelayRoot      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_RelayedRootBundle.set(base_SpokePool_RelayedRootBundleEntity);
});
    Base_SpokePoolContract.RequestedSpeedUpV3Deposit.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.RequestedSpeedUpV3Deposit.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_RequestedSpeedUpV3DepositCount: currentSummaryEntity.base_SpokePool_RequestedSpeedUpV3DepositCount + BigInt(1),
  };

  const base_SpokePool_RequestedSpeedUpV3DepositEntity: Base_SpokePool_RequestedSpeedUpV3DepositEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      updatedOutputAmount: event.params.updatedOutputAmount      ,
      depositId: event.params.depositId      ,
      depositor: event.params.depositor      ,
      updatedRecipient: event.params.updatedRecipient      ,
      updatedMessage: event.params.updatedMessage      ,
      depositorSignature: event.params.depositorSignature      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_RequestedSpeedUpV3Deposit.set(base_SpokePool_RequestedSpeedUpV3DepositEntity);
});
    Base_SpokePoolContract.RequestedV3SlowFill.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.RequestedV3SlowFill.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_RequestedV3SlowFillCount: currentSummaryEntity.base_SpokePool_RequestedV3SlowFillCount + BigInt(1),
  };

  const base_SpokePool_RequestedV3SlowFillEntity: Base_SpokePool_RequestedV3SlowFillEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      inputToken: event.params.inputToken      ,
      outputToken: event.params.outputToken      ,
      inputAmount: event.params.inputAmount      ,
      outputAmount: event.params.outputAmount      ,
      originChainId: event.params.originChainId      ,
      depositId: event.params.depositId      ,
      fillDeadline: event.params.fillDeadline      ,
      exclusivityDeadline: event.params.exclusivityDeadline      ,
      exclusiveRelayer: event.params.exclusiveRelayer      ,
      depositor: event.params.depositor      ,
      recipient: event.params.recipient      ,
      message: event.params.message      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_RequestedV3SlowFill.set(base_SpokePool_RequestedV3SlowFillEntity);
});
    Base_SpokePoolContract.SetHubPool.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.SetHubPool.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_SetHubPoolCount: currentSummaryEntity.base_SpokePool_SetHubPoolCount + BigInt(1),
  };

  const base_SpokePool_SetHubPoolEntity: Base_SpokePool_SetHubPoolEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      newHubPool: event.params.newHubPool      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_SetHubPool.set(base_SpokePool_SetHubPoolEntity);
});
    Base_SpokePoolContract.SetL1Gas.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.SetL1Gas.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_SetL1GasCount: currentSummaryEntity.base_SpokePool_SetL1GasCount + BigInt(1),
  };

  const base_SpokePool_SetL1GasEntity: Base_SpokePool_SetL1GasEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      newL1Gas: event.params.newL1Gas      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_SetL1Gas.set(base_SpokePool_SetL1GasEntity);
});
    Base_SpokePoolContract.SetL2TokenBridge.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.SetL2TokenBridge.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_SetL2TokenBridgeCount: currentSummaryEntity.base_SpokePool_SetL2TokenBridgeCount + BigInt(1),
  };

  const base_SpokePool_SetL2TokenBridgeEntity: Base_SpokePool_SetL2TokenBridgeEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      l2Token: event.params.l2Token      ,
      tokenBridge: event.params.tokenBridge      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_SetL2TokenBridge.set(base_SpokePool_SetL2TokenBridgeEntity);
});
    Base_SpokePoolContract.SetXDomainAdmin.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.SetXDomainAdmin.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_SetXDomainAdminCount: currentSummaryEntity.base_SpokePool_SetXDomainAdminCount + BigInt(1),
  };

  const base_SpokePool_SetXDomainAdminEntity: Base_SpokePool_SetXDomainAdminEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      newAdmin: event.params.newAdmin      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_SetXDomainAdmin.set(base_SpokePool_SetXDomainAdminEntity);
});
    Base_SpokePoolContract.TokensBridged.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.TokensBridged.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_TokensBridgedCount: currentSummaryEntity.base_SpokePool_TokensBridgedCount + BigInt(1),
  };

  const base_SpokePool_TokensBridgedEntity: Base_SpokePool_TokensBridgedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      amountToReturn: event.params.amountToReturn      ,
      chainId: event.params.chainId      ,
      leafId: event.params.leafId      ,
      l2TokenAddress: event.params.l2TokenAddress      ,
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_TokensBridged.set(base_SpokePool_TokensBridgedEntity);
});
    Base_SpokePoolContract.Upgraded.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.Upgraded.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_UpgradedCount: currentSummaryEntity.base_SpokePool_UpgradedCount + BigInt(1),
  };

  const base_SpokePool_UpgradedEntity: Base_SpokePool_UpgradedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      implementation: event.params.implementation      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_Upgraded.set(base_SpokePool_UpgradedEntity);
});
    Base_SpokePoolContract.V3FundsDeposited.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    Base_SpokePoolContract.V3FundsDeposited.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    base_SpokePool_V3FundsDepositedCount: currentSummaryEntity.base_SpokePool_V3FundsDepositedCount + BigInt(1),
  };

  const base_SpokePool_V3FundsDepositedEntity: Base_SpokePool_V3FundsDepositedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      inputToken: event.params.inputToken      ,
      outputToken: event.params.outputToken      ,
      inputAmount: event.params.inputAmount      ,
      outputAmount: event.params.outputAmount      ,
      destinationChainId: event.params.destinationChainId      ,
      depositId: event.params.depositId      ,
      quoteTimestamp: event.params.quoteTimestamp      ,
      fillDeadline: event.params.fillDeadline      ,
      exclusivityDeadline: event.params.exclusivityDeadline      ,
      depositor: event.params.depositor      ,
      recipient: event.params.recipient      ,
      exclusiveRelayer: event.params.exclusiveRelayer      ,
      message: event.params.message      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Base_SpokePool_V3FundsDeposited.set(base_SpokePool_V3FundsDepositedEntity);
});
