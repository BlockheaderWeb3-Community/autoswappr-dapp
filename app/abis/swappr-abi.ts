import type { Abi } from "starknet";

export const SWAPPR_ABI = [
  {
    type: "impl",
    name: "UpgradeableImpl",
    interface_name: "openzeppelin_upgrades::interface::IUpgradeable",
  },
  {
    type: "interface",
    name: "openzeppelin_upgrades::interface::IUpgradeable",
    items: [
      {
        type: "function",
        name: "upgrade",
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
    type: "impl",
    name: "AutoSwappr",
    interface_name: "auto_swappr::interfaces::iautoswappr::IAutoSwappr",
  },
  {
    type: "struct",
    name: "core::integer::u256",
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
    type: "struct",
    name: "auto_swappr::base::types::Route",
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
    type: "struct",
    name: "auto_swappr::base::types::RouteParams",
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
    type: "struct",
    name: "auto_swappr::base::types::SwapParams",
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
    type: "struct",
    name: "auto_swappr::interfaces::iautoswappr::ContractInfo",
    members: [
      {
        name: "fees_collector",
        type: "core::starknet::contract_address::ContractAddress",
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
        name: "strk_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "eth_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "enum",
    name: "core::bool",
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
    type: "interface",
    name: "auto_swappr::interfaces::iautoswappr::IAutoSwappr",
    items: [
      {
        type: "function",
        name: "avnu_swap",
        inputs: [
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
            name: "token_to_amount",
            type: "core::integer::u256",
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
        type: "function",
        name: "fibrous_swap",
        inputs: [
          {
            name: "routeParams",
            type: "auto_swappr::base::types::RouteParams",
          },
          {
            name: "swapParams",
            type: "core::array::Array::<auto_swappr::base::types::SwapParams>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "contract_parameters",
        inputs: [],
        outputs: [
          {
            type: "auto_swappr::interfaces::iautoswappr::ContractInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "set_operator",
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
        type: "function",
        name: "remove_operator",
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
        type: "function",
        name: "is_operator",
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
      {
        type: "function",
        name: "get_strk_usd_price",
        inputs: [],
        outputs: [
          {
            type: "(core::integer::u128, core::integer::u32)",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_eth_usd_price",
        inputs: [],
        outputs: [
          {
            type: "(core::integer::u128, core::integer::u32)",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "OwnableImpl",
    interface_name: "openzeppelin_access::ownable::interface::IOwnable",
  },
  {
    type: "interface",
    name: "openzeppelin_access::ownable::interface::IOwnable",
    items: [
      {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "transfer_ownership",
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
        type: "function",
        name: "renounce_ownership",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "fees_collector",
        type: "core::starknet::contract_address::ContractAddress",
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
        name: "oracle_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "_strk_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "_eth_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "OwnershipTransferred",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        kind: "nested",
      },
      {
        name: "OwnershipTransferStarted",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
    kind: "struct",
    members: [
      {
        name: "class_hash",
        type: "core::starknet::class_hash::ClassHash",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "Upgraded",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "auto_swappr::autoswappr::AutoSwappr::SwapSuccessful",
    kind: "struct",
    members: [
      {
        name: "token_from_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "token_from_amount",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "token_to_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "token_to_amount",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "beneficiary",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "struct",
    name: "auto_swappr::base::types::Assets",
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
    type: "event",
    name: "auto_swappr::autoswappr::AutoSwappr::Subscribed",
    kind: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "assets",
        type: "auto_swappr::base::types::Assets",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "auto_swappr::autoswappr::AutoSwappr::Unsubscribed",
    kind: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "assets",
        type: "auto_swappr::base::types::Assets",
        kind: "data",
      },
      {
        name: "block_timestamp",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "auto_swappr::autoswappr::AutoSwappr::OperatorAdded",
    kind: "struct",
    members: [
      {
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "time_added",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "auto_swappr::autoswappr::AutoSwappr::OperatorRemoved",
    kind: "struct",
    members: [
      {
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "time_removed",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "auto_swappr::autoswappr::AutoSwappr::Event",
    kind: "enum",
    variants: [
      {
        name: "OwnableEvent",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
        kind: "flat",
      },
      {
        name: "UpgradeableEvent",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
        kind: "flat",
      },
      {
        name: "SwapSuccessful",
        type: "auto_swappr::autoswappr::AutoSwappr::SwapSuccessful",
        kind: "nested",
      },
      {
        name: "Subscribed",
        type: "auto_swappr::autoswappr::AutoSwappr::Subscribed",
        kind: "nested",
      },
      {
        name: "Unsubscribed",
        type: "auto_swappr::autoswappr::AutoSwappr::Unsubscribed",
        kind: "nested",
      },
      {
        name: "OperatorAdded",
        type: "auto_swappr::autoswappr::AutoSwappr::OperatorAdded",
        kind: "nested",
      },
      {
        name: "OperatorRemoved",
        type: "auto_swappr::autoswappr::AutoSwappr::OperatorRemoved",
        kind: "nested",
      },
    ],
  },
] as const satisfies Abi;
