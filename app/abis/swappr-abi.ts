import type { Abi } from "starknet";

export const SWAPPR_ABI = [
  {
    name: "UpgradeableImpl",
    type: "impl",
    interface_name: "openzeppelin_upgrades::interface::IUpgradeable",
  },
  {
    name: "openzeppelin_upgrades::interface::IUpgradeable",
    type: "interface",
    items: [
      {
        name: "upgrade",
        type: "function",
        inputs: [
          {
            name: "new_class_hash",
            type: "core::starknet::class_hash::ClassHash",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "AutoSwappr",
    type: "impl",
    interface_name: "auto_swappr::interfaces::iautoswappr::IAutoSwappr",
  },
  {
    name: "core::integer::u256",
    type: "struct",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },
  {
    name: "auto_swappr::base::types::Route",
    type: "struct",
    members: [
      {
        name: "token_from",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "token_to",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "exchange_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "percent",
        type: "core::integer::u128",
      },
      {
        name: "additional_swap_params",
        type: "core::array::Array::<core::felt252>",
      },
    ],
  },
  {
    name: "auto_swappr::base::types::RouteParams",
    type: "struct",
    members: [
      {
        name: "token_in",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "token_out",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "amount_in",
        type: "core::integer::u256",
      },
      {
        name: "min_received",
        type: "core::integer::u256",
      },
      {
        name: "destination",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    name: "auto_swappr::base::types::SwapParams",
    type: "struct",
    members: [
      {
        name: "token_in",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "token_out",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "rate",
        type: "core::integer::u32",
      },
      {
        name: "protocol_id",
        type: "core::integer::u32",
      },
      {
        name: "pool_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "extra_data",
        type: "core::array::Array::<core::felt252>",
      },
    ],
  },
  {
    name: "auto_swappr::base::types::FeeType",
    type: "enum",
    variants: [
      {
        name: "Fixed",
        type: "()",
      },
      {
        name: "Percentage",
        type: "()",
      },
    ],
  },
  {
    name: "auto_swappr::interfaces::iautoswappr::ContractInfo",
    type: "struct",
    members: [
      {
        name: "fees_collector",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "fibrous_exchange_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "avnu_exchange_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "oracle_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "fee_type",
        type: "auto_swappr::base::types::FeeType",
      },
      {
        name: "percentage_fee",
        type: "core::integer::u16",
      },
    ],
  },
  {
    name: "core::bool",
    type: "enum",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    name: "ekubo::types::i129::i129",
    type: "struct",
    members: [
      {
        name: "mag",
        type: "core::integer::u128",
      },
      {
        name: "sign",
        type: "core::bool",
      },
    ],
  },
  {
    name: "ekubo::interfaces::core::SwapParameters",
    type: "struct",
    members: [
      {
        name: "amount",
        type: "ekubo::types::i129::i129",
      },
      {
        name: "is_token1",
        type: "core::bool",
      },
      {
        name: "sqrt_ratio_limit",
        type: "core::integer::u256",
      },
      {
        name: "skip_ahead",
        type: "core::integer::u128",
      },
    ],
  },
  {
    name: "ekubo::types::keys::PoolKey",
    type: "struct",
    members: [
      {
        name: "token0",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "token1",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "fee",
        type: "core::integer::u128",
      },
      {
        name: "tick_spacing",
        type: "core::integer::u128",
      },
      {
        name: "extension",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    name: "auto_swappr::base::types::SwapData",
    type: "struct",
    members: [
      {
        name: "params",
        type: "ekubo::interfaces::core::SwapParameters",
      },
      {
        name: "pool_key",
        type: "ekubo::types::keys::PoolKey",
      },
      {
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    name: "ekubo::types::delta::Delta",
    type: "struct",
    members: [
      {
        name: "amount0",
        type: "ekubo::types::i129::i129",
      },
      {
        name: "amount1",
        type: "ekubo::types::i129::i129",
      },
    ],
  },
  {
    name: "auto_swappr::base::types::SwapResult",
    type: "struct",
    members: [
      {
        name: "delta",
        type: "ekubo::types::delta::Delta",
      },
    ],
  },
  {
    name: "auto_swappr::interfaces::iautoswappr::IAutoSwappr",
    type: "interface",
    items: [
      {
        name: "avnu_swap",
        type: "function",
        inputs: [
          {
            name: "protocol_swapper",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_from_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_from_amount",
            type: "core::integer::u256",
          },
          {
            name: "token_to_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_to_min_amount",
            type: "core::integer::u256",
          },
          {
            name: "beneficiary",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "integrator_fee_amount_bps",
            type: "core::integer::u128",
          },
          {
            name: "integrator_fee_recipient",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "routes",
            type: "core::array::Array::<auto_swappr::base::types::Route>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "fibrous_swap",
        type: "function",
        inputs: [
          {
            name: "routeParams",
            type: "auto_swappr::base::types::RouteParams",
          },
          {
            name: "swapParams",
            type: "core::array::Array::<auto_swappr::base::types::SwapParams>",
          },
          {
            name: "protocol_swapper",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "beneficiary",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "contract_parameters",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "auto_swappr::interfaces::iautoswappr::ContractInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "support_new_token_from",
        type: "function",
        inputs: [
          {
            name: "token_from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "feed_id",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_token_from",
        type: "function",
        inputs: [
          {
            name: "token_from",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "get_token_amount_in_usd",
        type: "function",
        inputs: [
          {
            name: "token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_token_from_status_and_value",
        type: "function",
        inputs: [
          {
            name: "token_from",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "(core::bool, core::felt252)",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "set_fee_type",
        type: "function",
        inputs: [
          {
            name: "fee_type",
            type: "auto_swappr::base::types::FeeType",
          },
          {
            name: "percentage_fee",
            type: "core::integer::u16",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "ekubo_swap",
        type: "function",
        inputs: [
          {
            name: "swap_data",
            type: "auto_swappr::base::types::SwapData",
          },
        ],
        outputs: [
          {
            type: "auto_swappr::base::types::SwapResult",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "ekubo_manual_swap",
        type: "function",
        inputs: [
          {
            name: "swap_data",
            type: "auto_swappr::base::types::SwapData",
          },
        ],
        outputs: [
          {
            type: "auto_swappr::base::types::SwapResult",
          },
        ],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "LockerImpl",
    type: "impl",
    interface_name: "ekubo::interfaces::core::ILocker",
  },
  {
    name: "core::array::Span::<core::felt252>",
    type: "struct",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<core::felt252>",
      },
    ],
  },
  {
    name: "ekubo::interfaces::core::ILocker",
    type: "interface",
    items: [
      {
        name: "locked",
        type: "function",
        inputs: [
          {
            name: "id",
            type: "core::integer::u32",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [
          {
            type: "core::array::Span::<core::felt252>",
          },
        ],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "OwnableImpl",
    type: "impl",
    interface_name: "openzeppelin_access::ownable::interface::IOwnable",
  },
  {
    name: "openzeppelin_access::ownable::interface::IOwnable",
    type: "interface",
    items: [
      {
        name: "owner",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "transfer_ownership",
        type: "function",
        inputs: [
          {
            name: "new_owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "renounce_ownership",
        type: "function",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "OperatorImpl",
    type: "impl",
    interface_name: "auto_swappr::interfaces::ioperator::IOperator",
  },
  {
    name: "auto_swappr::interfaces::ioperator::IOperator",
    type: "interface",
    items: [
      {
        name: "set_operator",
        type: "function",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_operator",
        type: "function",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "is_operator",
        type: "function",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "fees_collector",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "fee_amount_bps",
        type: "core::integer::u8",
      },
      {
        name: "avnu_exchange_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "fibrous_exchange_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "ekubo_core_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "oracle_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "supported_assets",
        type: "core::array::Array::<core::starknet::contract_address::ContractAddress>",
      },
      {
        name: "supported_assets_priceFeeds_ids",
        type: "core::array::Array::<core::felt252>",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "initial_fee_type",
        type: "auto_swappr::base::types::FeeType",
      },
      {
        name: "initial_percentage_fee",
        type: "core::integer::u16",
      },
    ],
  },
  {
    kind: "struct",
    name: "auto_swappr::autoswappr::AutoSwappr::SwapSuccessful",
    type: "event",
    members: [
      {
        kind: "data",
        name: "token_from_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "token_from_amount",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "token_to_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "token_to_amount",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "beneficiary",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "provider",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    name: "auto_swappr::base::types::Assets",
    type: "struct",
    members: [
      {
        name: "strk",
        type: "core::bool",
      },
      {
        name: "eth",
        type: "core::bool",
      },
    ],
  },
  {
    kind: "struct",
    name: "auto_swappr::autoswappr::AutoSwappr::Subscribed",
    type: "event",
    members: [
      {
        kind: "data",
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "assets",
        type: "auto_swappr::base::types::Assets",
      },
    ],
  },
  {
    kind: "struct",
    name: "auto_swappr::autoswappr::AutoSwappr::Unsubscribed",
    type: "event",
    members: [
      {
        kind: "data",
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "assets",
        type: "auto_swappr::base::types::Assets",
      },
      {
        kind: "data",
        name: "block_timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "auto_swappr::autoswappr::AutoSwappr::FeeTypeChanged",
    type: "event",
    members: [
      {
        kind: "data",
        name: "new_fee_type",
        type: "auto_swappr::base::types::FeeType",
      },
      {
        kind: "data",
        name: "new_percentage_fee",
        type: "core::integer::u16",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    type: "event",
    members: [
      {
        kind: "key",
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    type: "event",
    members: [
      {
        kind: "key",
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "enum",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "OwnershipTransferred",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
      },
      {
        kind: "nested",
        name: "OwnershipTransferStarted",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "class_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
    ],
  },
  {
    kind: "enum",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "Upgraded",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
      },
    ],
  },
  {
    kind: "struct",
    name: "auto_swappr::components::operator::OperatorComponent::OperatorAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "time_added",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "auto_swappr::components::operator::OperatorComponent::OperatorRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "time_removed",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "enum",
    name: "auto_swappr::components::operator::OperatorComponent::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "OperatorAdded",
        type: "auto_swappr::components::operator::OperatorComponent::OperatorAdded",
      },
      {
        kind: "nested",
        name: "OperatorRemoved",
        type: "auto_swappr::components::operator::OperatorComponent::OperatorRemoved",
      },
    ],
  },
  {
    kind: "enum",
    name: "auto_swappr::autoswappr::AutoSwappr::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "SwapSuccessful",
        type: "auto_swappr::autoswappr::AutoSwappr::SwapSuccessful",
      },
      {
        kind: "nested",
        name: "Subscribed",
        type: "auto_swappr::autoswappr::AutoSwappr::Subscribed",
      },
      {
        kind: "nested",
        name: "Unsubscribed",
        type: "auto_swappr::autoswappr::AutoSwappr::Unsubscribed",
      },
      {
        kind: "nested",
        name: "FeeTypeChanged",
        type: "auto_swappr::autoswappr::AutoSwappr::FeeTypeChanged",
      },
      {
        kind: "flat",
        name: "OwnableEvent",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
      },
      {
        kind: "flat",
        name: "UpgradeableEvent",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
      },
      {
        kind: "flat",
        name: "OperatorEvent",
        type: "auto_swappr::components::operator::OperatorComponent::Event",
      },
    ],
  },
] as const satisfies Abi;
