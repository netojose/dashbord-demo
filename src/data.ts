import { KYCReportItem, RiskScore, Status } from '@/types'

export const data: Array<KYCReportItem> = [
  {
    id: 1,
    created: '2024-06-30T18:16:37',
    name: 'José Neto',
    email: 'contact@joseneto.dev',
    risk: RiskScore.HIGH,
    status: Status.APPROVED,
    type: 'Candidate'
  },
  {
    id: 2,
    created: '2024-03-07T16:28:28.546Z',
    name: 'Dandara Oliveira',
    email: 'dandara.oliveira@gmail.com',
    risk: undefined,
    status: Status.CANCELLED,
    type: 'Candidate'
  },
  {
    id: 3,
    created: '2024-03-16T22:45:57.945Z',
    name: 'Vânia Lima',
    email: 'valie.1988@yahoo.com',
    risk: RiskScore.MEDIUM,
    status: Status.APPROVED,
    type: 'Partner'
  },
  {
    id: 4,
    created: '2024-04-09T09:36:18.534Z',
    name: 'Mark Lowrence',
    email: 'mark_45@wallamail.com',
    risk: RiskScore.MEDIUM,
    status: Status.PROCESSING,
    type: 'Partner'
  },
  {
    id: 5,
    created: '2024-04-25T20:20:41.372Z',
    name: 'Jhon Silas',
    email: 'jhon@acme.com',
    risk: RiskScore.LOW,
    status: Status.APPROVED,
    type: 'Candidate'
  },
  {
    id: 6,
    created: '2024-06-21T17:08:36.081Z',
    name: 'Natalia Pereira',
    email: 'nath_lima@gmail.com',
    risk: undefined,
    status: Status.REJECTED,
    type: 'Partner'
  },
  {
    id: 7,
    created: '2024-05-12T20:53:23.155Z',
    name: 'Mike Smith',
    email: 'mke_smith@company.com',
    risk: RiskScore.MEDIUM,
    status: Status.PROCESSING,
    type: 'Partner'
  },
  {
    id: 8,
    created: '2024-04-23T06:16:27.890Z',
    name: 'Peterson Moskley',
    email: 'peterson.moskley@acme.com',
    risk: RiskScore.MEDIUM,
    status: Status.READY,
    type: 'Candidate'
  },
  {
    id: 9,
    created: '2024-06-22T21:19:20.289Z',
    name: 'Lula Oliveira',
    email: 'lula.oliveira@gmail.com',
    risk: RiskScore.HIGH,
    status: Status.REJECTED,
    type: 'Partner'
  },
  {
    id: 10,
    created: '2024-04-08T01:11:40.417Z',
    name: 'Dália Santos',
    email: 'dalia.santos@gmail.com',
    risk: undefined,
    status: Status.REJECTED,
    type: 'Candidate'
  },
  {
    id: 11,
    created: '2024-04-21T20:41:32.788Z',
    name: 'Jeorge Peterson',
    email: 'jeorge.peterson@gmail.com',
    risk: RiskScore.MEDIUM,
    status: Status.APPROVED,
    type: 'Partner'
  }
]
