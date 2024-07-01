export enum RiskScore {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum Status {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  READY = 'READY',
  PROCESSING = 'PROCESSING'
}

export type KYCReportItem = {
  id: number
  created: string
  name: string
  email: string
  type: string
  risk?: RiskScore
  status: Status
}
