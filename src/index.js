class CohortList {
  constructor() {
    this.cohorts = []
  }

  add(cohortName) {
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)

    return newCohort
  }

  search(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    return found
  }

  remove(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    const foundIndex = this.cohorts.findIndex(
      (cohort) => cohort.cohortName === cohortName
    )

    if (foundIndex >= 0 && found) {
      this.cohorts.splice(foundIndex, 1)
    }

    return found
  }
}

class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
  }
}

export { Cohort }
export default CohortList
