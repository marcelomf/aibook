export class Runner {

	functionPromise: any;
	
	constructor(functionPromise: any) {
		this.functionPromise = functionPromise;
	}

	_executions: any = []
	stop = false
  
	stopRunner() {
	  this.stop = true
	}
  
	addExecution(...args: any) {
		this._executions.push(args)
	}
  
	executionCount() { 
		return this._executions.length 
	} 
  
	async run(groupedBy: number | undefined, onResolve: any, onReject: any) {
	  if (!groupedBy || groupedBy <= 0) {
		groupedBy = 1
	  }
  
	  while (this._executions.length > 0 && !this.stop) {
		const currentPromises = []
		const currentArgs = this._executions.splice(0, groupedBy)
  
		// eslint-disable-next-line no-unused-vars
		for (let args of currentArgs) {
		  currentPromises.push(this.functionPromise(...args).then(onResolve, onReject))
		}
  
		await Promise.all(currentPromises)
	  }
  
	  return true
	}
}