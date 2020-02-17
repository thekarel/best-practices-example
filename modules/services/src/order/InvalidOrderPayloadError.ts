import {CustomError} from 'ts-custom-error'

export class InvalidOrderPayloadError extends CustomError {
  constructor(errors: string[]) {
    super(errors.join('; '))
  }
}
