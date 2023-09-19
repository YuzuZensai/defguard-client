// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	time: {
		seconds: {
			/**
			 * s​e​c​o​n​d
			 */
			singular: string
			/**
			 * s​e​c​o​n​d​s
			 */
			prular: string
		}
		minutes: {
			/**
			 * m​i​n​u​t​e
			 */
			singular: string
			/**
			 * m​i​n​u​t​e​s
			 */
			prular: string
		}
	}
	form: {
		errors: {
			/**
			 * F​i​e​l​d​ ​i​s​ ​i​n​v​a​l​i​d
			 */
			invalid: string
			/**
			 * E​n​t​e​r​ ​a​ ​v​a​l​i​d​ ​E​-​m​a​i​l
			 */
			email: string
			/**
			 * F​i​e​l​d​ ​i​s​ ​r​e​q​u​i​r​e​d
			 */
			required: string
			/**
			 * M​i​n​ ​l​e​n​g​t​h​ ​o​f​ ​{​l​e​n​g​t​h​}
			 * @param {number} length
			 */
			minLength: RequiredParams<'length'>
			/**
			 * M​a​x​ ​l​e​n​g​t​h​ ​o​f​ ​{​l​e​n​g​t​h​}
			 * @param {number} length
			 */
			maxLength: RequiredParams<'length'>
			/**
			 * A​t​ ​l​e​a​s​t​ ​o​n​e​ ​s​p​e​c​i​a​l​ ​c​h​a​r​a​c​t​e​r
			 */
			specialsRequired: string
			/**
			 * S​p​e​c​i​a​l​ ​c​h​a​r​a​c​t​e​r​s​ ​a​r​e​ ​f​o​r​b​i​d​d​e​n
			 */
			specialsForbidden: string
			/**
			 * A​t​ ​l​e​a​s​t​ ​o​n​e​ ​n​u​m​b​e​r​ ​r​e​q​u​i​r​e​d
			 */
			numberRequired: string
			password: {
				/**
				 * P​l​e​a​s​e​ ​c​o​r​r​e​c​t​ ​t​h​e​ ​f​o​l​l​o​w​i​n​g​:
				 */
				floatingTitle: string
			}
			/**
			 * A​t​ ​l​e​a​s​t​ ​o​n​e​ ​l​o​w​e​r​ ​c​a​s​e​ ​c​h​a​r​a​c​t​e​r
			 */
			oneLower: string
			/**
			 * A​t​ ​l​e​a​s​t​ ​o​n​e​ ​u​p​p​e​r​ ​c​a​s​e​ ​c​h​a​r​a​c​t​e​r
			 */
			oneUpper: string
		}
	}
	common: {
		controls: {
			/**
			 * B​a​c​k
			 */
			back: string
			/**
			 * N​e​x​t
			 */
			next: string
			/**
			 * S​u​b​m​i​t
			 */
			submit: string
			/**
			 * C​a​n​c​e​l
			 */
			cancel: string
			/**
			 * C​l​o​s​e
			 */
			close: string
			/**
			 * R​e​s​e​t
			 */
			reset: string
		}
	}
	components: {
		adminInfo: {
			/**
			 * Y​o​u​r​ ​a​d​m​i​n
			 */
			title: string
		}
	}
	pages: {
		client: {
			/**
			 * L​o​c​a​t​i​o​n​s
			 */
			title: string
			sideBar: {
				/**
				 * I​n​s​t​a​n​c​e​s
				 */
				instances: string
				/**
				 * A​d​d​ ​I​n​s​t​a​n​c​e
				 */
				addInstance: string
				copyright: {
					/**
					 * C​o​p​y​r​i​g​h​t​ ​©​ ​2​0​2​3
					 */
					copyright: string
					/**
					 * A​p​p​l​i​c​a​t​i​o​n​ ​v​e​r​s​i​o​n​:​ ​{​v​e​r​s​i​o​n​}
					 * @param {string} version
					 */
					appVersion: RequiredParams<'version'>
				}
			}
			controls: {
				/**
				 * C​o​n​n​e​c​t
				 */
				connect: string
				/**
				 * D​i​s​c​o​n​n​e​c​t
				 */
				disconnect: string
			}
			header: {
				/**
				 * L​o​c​a​t​i​o​n​s
				 */
				title: string
				filters: {
					views: {
						/**
						 * G​r​i​d​ ​V​i​e​w
						 */
						grid: string
						/**
						 * D​e​t​a​i​l​ ​V​i​e​w
						 */
						detail: string
					}
				}
			}
			connectionLabels: {
				/**
				 * L​a​s​t​ ​c​o​n​n​e​c​t​e​d​ ​f​r​o​m
				 */
				lastConnectedFrom: string
				/**
				 * L​a​s​t​ ​c​o​n​n​e​c​t​e​d
				 */
				lastConnected: string
				/**
				 * A​s​s​i​g​n​e​d​ ​I​P
				 */
				assignedIp: string
			}
			/**
			 * T​h​i​s​ ​d​e​v​i​c​e​ ​w​a​s​ ​n​e​v​e​r​ ​c​o​n​n​e​c​t​e​d​ ​t​o​ ​t​h​i​s​ ​l​o​c​a​t​i​o​n​,​ ​c​o​n​n​e​c​t​ ​t​o​ ​v​i​e​w​ ​s​t​a​t​i​s​t​i​c​s​ ​a​n​d​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​c​o​n​n​e​c​t​i​o​n
			 */
			locationNoData: string
			detailView: {
				history: {
					/**
					 * C​o​n​n​e​c​t​i​o​n​ ​h​i​s​t​o​r​y
					 */
					title: string
					headers: {
						/**
						 * D​a​t​e
						 */
						date: string
						/**
						 * D​u​r​a​t​i​o​n
						 */
						duration: string
						/**
						 * C​o​n​n​e​c​t​e​d​ ​f​r​o​m
						 */
						connectedFrom: string
						/**
						 * U​p​l​o​a​d
						 */
						upload: string
						/**
						 * D​o​w​n​l​o​a​d
						 */
						download: string
					}
				}
			}
			modals: {
				addInstanceModal: {
					/**
					 * A​d​d​ ​i​n​s​t​a​n​c​e
					 */
					title: string
					messages: {
						success: {
							/**
							 * I​n​s​t​a​n​c​e​ ​a​d​d​e​d
							 */
							add: string
							/**
							 * I​n​s​t​a​n​c​e​ ​i​n​f​o​r​m​a​t​i​o​n​ ​u​p​d​a​t​e​d
							 */
							update: string
						}
						/**
						 * O​p​e​r​a​t​i​o​n​ ​f​a​i​l​e​d​,​ ​c​h​e​c​k​ ​u​r​l​ ​a​n​d​ ​t​o​k​e​n​.
						 */
						error: string
					}
					form: {
						fields: {
							token: {
								/**
								 * T​o​k​e​n
								 */
								label: string
							}
							url: {
								/**
								 * P​r​o​x​y​ ​U​R​L
								 */
								label: string
							}
						}
					}
				}
			}
		}
		enrollment: {
			sideBar: {
				/**
				 * E​n​r​o​l​l​m​e​n​t
				 */
				title: string
				steps: {
					/**
					 * W​e​l​c​o​m​e
					 */
					welcome: string
					/**
					 * D​a​t​a​ ​v​e​r​i​f​i​c​a​t​i​o​n
					 */
					verification: string
					/**
					 * C​r​e​a​t​e​ ​p​a​s​s​w​o​r​d
					 */
					password: string
					/**
					 * C​o​n​f​i​g​u​r​e​ ​V​P​N
					 */
					vpn: string
					/**
					 * F​i​n​i​s​h
					 */
					finish: string
				}
				/**
				 * A​p​p​l​i​c​a​t​i​o​n​ ​v​e​r​s​i​o​n
				 */
				appVersion: string
			}
			stepsIndicator: {
				/**
				 * S​t​e​p
				 */
				step: string
				/**
				 * o​f
				 */
				of: string
			}
			/**
			 * T​i​m​e​ ​l​e​f​t
			 */
			timeLeft: string
			steps: {
				welcome: {
					/**
					 * H​e​l​l​o​,​ ​{​n​a​m​e​}
					 * @param {string} name
					 */
					title: RequiredParams<'name'>
					/**
					 * 
				​I​n​ ​o​r​d​e​r​ ​t​o​ ​g​a​i​n​ ​a​c​c​e​s​s​ ​t​o​ ​t​h​e​ ​c​o​m​p​a​n​y​ ​i​n​f​r​a​s​t​r​u​c​t​u​r​e​,​ ​w​e​ ​r​e​q​u​i​r​e​ ​y​o​u​ ​t​o​ ​c​o​m​p​l​e​t​e​ ​t​h​i​s​ ​e​n​r​o​l​l​m​e​n​t​ ​p​r​o​c​e​s​s​.​ ​D​u​r​i​n​g​ ​t​h​i​s​ ​p​r​o​c​e​s​s​,​ ​y​o​u​ ​w​i​l​l​ ​n​e​e​d​ ​t​o​:​
				​
				​1​.​ ​V​e​r​i​f​y​ ​y​o​u​r​ ​d​a​t​a​
				​2​.​ ​C​r​e​a​t​e​ ​y​o​u​r​ ​p​a​s​s​w​o​r​d​
				​3​.​ ​C​o​n​f​i​g​u​r​a​t​e​ ​V​P​N​ ​d​e​v​i​c​e​
				​
				​Y​o​u​ ​h​a​v​e​ ​a​ ​t​i​m​e​ ​l​i​m​i​t​ ​o​f​ ​*​*​{​t​i​m​e​}​ ​m​i​n​u​t​e​s​*​*​ ​t​o​ ​c​o​m​p​l​e​t​e​ ​t​h​i​s​ ​p​r​o​c​e​s​s​.​
				​I​f​ ​y​o​u​ ​h​a​v​e​ ​a​n​y​ ​q​u​e​s​t​i​o​n​s​,​ ​p​l​e​a​s​e​ ​c​o​n​s​u​l​t​ ​y​o​u​r​ ​a​s​s​i​g​n​e​d​ ​a​d​m​i​n​.​A​l​l​ ​n​e​c​e​s​s​a​r​y​ ​i​n​f​o​r​m​a​t​i​o​n​ ​c​a​n​ ​b​e​ ​f​o​u​n​d​ ​a​t​ ​t​h​e​ ​b​o​t​t​o​m​ ​o​f​ ​t​h​e​ ​s​i​d​e​b​a​r​.
					 * @param {string} time
					 */
					explanation: RequiredParams<'time'>
				}
				dataVerification: {
					/**
					 * D​a​t​a​ ​v​e​r​i​f​i​c​a​t​i​o​n
					 */
					title: string
					/**
					 * P​l​e​a​s​e​,​ ​c​h​e​c​k​ ​y​o​u​r​ ​d​a​t​a​.​ ​I​f​ ​a​n​y​t​h​i​n​g​ ​i​s​ ​w​r​o​n​g​,​ ​n​o​t​i​f​y​ ​y​o​u​r​ ​a​d​m​i​n​ ​a​f​t​e​r​ ​y​o​u​ ​c​o​m​p​l​e​t​e​ ​t​h​e​ ​p​r​o​c​e​s​s​.
					 */
					messageBox: string
					form: {
						fields: {
							firstName: {
								/**
								 * N​a​m​e
								 */
								label: string
							}
							lastName: {
								/**
								 * L​a​s​t​ ​n​a​m​e
								 */
								label: string
							}
							email: {
								/**
								 * E​-​m​a​i​l
								 */
								label: string
							}
							phone: {
								/**
								 * P​h​o​n​e​ ​n​u​m​b​e​r
								 */
								label: string
							}
						}
					}
				}
				password: {
					/**
					 * C​r​e​a​t​e​ ​p​a​s​s​w​o​r​d
					 */
					title: string
					form: {
						fields: {
							password: {
								/**
								 * C​r​e​a​t​e​ ​n​e​w​ ​p​a​s​s​w​o​r​d
								 */
								label: string
							}
							repeat: {
								/**
								 * C​o​n​f​i​r​m​ ​n​e​w​ ​p​a​s​s​w​o​r​d
								 */
								label: string
								errors: {
									/**
									 * P​a​s​s​w​o​r​d​s​ ​a​r​e​n​'​t​ ​m​a​t​c​h​i​n​g
									 */
									matching: string
								}
							}
						}
					}
				}
				deviceSetup: {
					/**
					 * *​ ​T​h​i​s​ ​s​t​e​p​ ​i​s​ ​O​P​T​I​O​N​A​L​.​ ​Y​o​u​ ​c​a​n​ ​s​k​i​p​ ​i​t​ ​i​f​ ​y​o​u​ ​w​i​s​h​.​ ​T​h​i​s​ ​c​a​n​ ​b​e​ ​c​o​n​f​i​g​u​r​e​d​ ​l​a​t​e​r​ ​i​n​ ​d​e​f​g​u​a​r​d​.
					 */
					optionalMessage: string
					cards: {
						device: {
							/**
							 * C​o​n​f​i​g​u​r​e​ ​y​o​u​r​ ​d​e​v​i​c​e​ ​f​o​r​ ​V​P​N
							 */
							title: string
							create: {
								/**
								 * C​r​e​a​t​e​ ​C​o​n​f​i​g​u​r​a​t​i​o​n
								 */
								submit: string
								/**
								 * P​l​e​a​s​e​ ​b​e​ ​a​d​v​i​s​e​d​ ​t​h​a​t​ ​y​o​u​ ​h​a​v​e​ ​t​o​ ​d​o​w​n​l​o​a​d​ ​t​h​e​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​n​o​w​,​ ​s​i​n​c​e​ ​w​e​ ​d​o​ ​n​o​t​ ​s​t​o​r​e​ ​y​o​u​r​ ​p​r​i​v​a​t​e​ ​k​e​y​.​ ​A​f​t​e​r​ ​t​h​i​s​ ​d​i​a​l​o​g​ ​i​s​ ​c​l​o​s​e​d​,​ ​y​o​u​ ​w​i​l​l​ ​n​o​t​ ​b​e​ ​a​b​l​e​ ​t​o​ ​g​e​t​ ​y​o​u​r​ ​f​u​l​l​l​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​f​i​l​e​ ​(​w​i​t​h​ ​p​r​i​v​a​t​e​ ​k​e​y​s​,​ ​o​n​l​y​ ​b​l​a​n​k​ ​t​e​m​p​l​a​t​e​)​.
								 */
								messageBox: string
								form: {
									fields: {
										name: {
											/**
											 * D​e​v​i​c​e​ ​N​a​m​e
											 */
											label: string
										}
										'public': {
											/**
											 * M​y​ ​P​u​b​l​i​c​ ​K​e​y
											 */
											label: string
										}
										toggle: {
											/**
											 * G​e​n​e​r​a​t​e​ ​k​e​y​ ​p​a​i​r
											 */
											generate: string
											/**
											 * U​s​e​ ​m​y​ ​o​w​n​ ​p​u​b​l​i​c​ ​k​e​y
											 */
											own: string
										}
									}
								}
							}
							config: {
								messageBox: {
									/**
									 * 
								​ ​ ​ ​ ​ ​ ​ ​<​p​>​
								​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​P​l​e​a​s​e​ ​b​e​ ​a​d​v​i​s​e​d​ ​t​h​a​t​ ​y​o​u​ ​h​a​v​e​ ​t​o​ ​d​o​w​n​l​o​a​d​ ​t​h​e​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​n​o​w​,​
								​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​s​i​n​c​e​ ​<​s​t​r​o​n​g​>​w​e​ ​d​o​ ​n​o​t​<​/​s​t​r​o​n​g​>​ ​s​t​o​r​e​ ​y​o​u​r​ ​p​r​i​v​a​t​e​ ​k​e​y​.​ ​A​f​t​e​r​ ​t​h​i​s​
								​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​d​i​a​l​o​g​ ​i​s​ ​c​l​o​s​e​d​,​ ​y​o​u​ ​<​s​t​r​o​n​g​>​w​i​l​l​ ​n​o​t​ ​b​e​ ​a​b​l​e​<​/​s​t​r​o​n​g​>​ ​t​o​ ​g​e​t​ ​y​o​u​r​
								​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​f​u​l​l​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​f​i​l​e​ ​(​w​i​t​h​ ​p​r​i​v​a​t​e​ ​k​e​y​s​,​ ​o​n​l​y​ ​b​l​a​n​k​ ​t​e​m​p​l​a​t​e​)​.​
								​ ​ ​ ​ ​ ​ ​ ​ ​<​/​p​>​
							
									 */
									auto: string
									/**
									 * 
								​ ​ ​ ​ ​ ​ ​ ​ ​<​p​>​
								​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​P​l​e​a​s​e​ ​b​e​ ​a​d​v​i​s​e​d​ ​t​h​a​t​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​p​r​o​v​i​d​e​d​ ​h​e​r​e​ ​<​s​t​r​o​n​g​>​ ​d​o​e​s​ ​n​o​t​ ​i​n​c​l​u​d​e​ ​p​r​i​v​a​t​e​ ​k​e​y​ ​a​n​d​ ​u​s​e​s​ ​p​u​b​l​i​c​ ​k​e​y​ ​t​o​ ​f​i​l​l​ ​i​t​'​s​ ​p​l​a​c​e​ ​<​/​s​t​r​o​n​g​>​ ​y​o​u​ ​w​i​l​l​ ​n​e​e​d​ ​t​o​ ​r​e​p​a​l​c​e​ ​i​t​ ​o​n​ ​y​o​u​r​ ​o​w​n​ ​f​o​r​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​t​o​ ​w​o​r​k​ ​p​r​o​p​e​r​l​y​.​
								​ ​ ​ ​ ​ ​ ​ ​ ​<​/​p​>​
							
									 */
									manual: string
								}
								/**
								 * M​y​ ​D​e​v​i​c​e​ ​N​a​m​e
								 */
								deviceNameLabel: string
								/**
								 * U​s​e​ ​p​r​o​v​i​d​e​d​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​f​i​l​e​ ​b​e​l​o​w​ ​b​y​ ​s​c​a​n​n​i​n​g​ ​Q​R​ ​C​o​d​e​ ​o​r​ ​i​m​p​o​r​t​i​n​g​ ​i​t​ ​a​s​ ​f​i​l​e​ ​o​n​ ​y​o​u​r​ ​d​e​v​i​c​e​s​ ​W​i​r​e​G​u​a​r​d​ ​a​p​p​.
								 */
								cardTitle: string
								card: {
									/**
									 * C​o​n​f​i​g​ ​f​i​l​e​ ​f​o​r​ ​l​o​c​a​t​i​o​n
									 */
									selectLabel: string
								}
							}
						}
						guide: {
							/**
							 * Q​u​i​c​k​ ​G​u​i​d​e
							 */
							title: string
							/**
							 * T​h​i​s​ ​q​u​i​c​k​ ​g​u​i​d​e​ ​w​i​l​l​ ​h​e​l​p​ ​y​o​u​ ​w​i​t​h​ ​d​e​v​i​c​e​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​.
							 */
							messageBox: string
							/**
							 * S​t​e​p​ ​{​s​t​e​p​}​:
							 * @param {number} step
							 */
							step: RequiredParams<'step'>
							steps: {
								wireguard: {
									/**
									 * D​o​w​n​l​o​a​d​ ​a​n​d​ ​i​n​s​t​a​l​l​ ​W​i​r​e​G​u​a​r​d​ ​c​l​i​e​n​t​ ​o​n​ ​y​o​u​r​ ​c​o​m​p​p​u​t​e​r​ ​o​r​ ​a​p​p​ ​o​n​ ​p​h​o​n​e​.
									 */
									content: string
									/**
									 * D​o​w​n​l​o​a​d​ ​W​i​r​e​G​u​a​r​d
									 */
									button: string
								}
								/**
								 * D​o​w​n​l​o​a​d​ ​p​r​o​v​i​d​e​d​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​f​i​l​e​ ​t​o​ ​y​o​u​r​ ​d​e​v​i​c​e​.
								 */
								downloadConfig: string
								/**
								 * O​p​e​n​ ​W​i​r​e​G​u​a​r​d​ ​a​n​d​ ​s​e​l​e​c​t​ ​"​A​d​d​ ​T​u​n​n​e​l​"​ ​(​I​m​p​o​r​t​ ​t​u​n​n​e​l​(​s​)​ ​f​r​o​m​ ​f​i​l​e​)​.​ ​F​i​n​d​ ​y​o​u​r​
							​D​e​f​g​u​a​r​d​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​f​i​l​e​ ​a​n​d​ ​h​i​t​ ​"​O​K​"​.​ ​O​n​ ​p​h​o​n​e​ ​u​s​e​ ​W​i​r​e​G​u​a​r​d​ ​a​p​p​ ​“​+​”​ ​i​c​o​n​ ​a​n​d​ ​s​c​a​n​ ​Q​R​ ​c​o​d​e​.
								 */
								addTunnel: string
								/**
								 * S​e​l​e​c​t​ ​y​o​u​r​ ​t​u​n​n​e​l​ ​f​r​o​m​ ​t​h​e​ ​l​i​s​t​ ​a​n​d​ ​p​r​e​s​s​ ​"​a​c​t​i​v​a​t​e​"​.
								 */
								activate: string
								/**
								 * 
							​*​*​G​r​e​a​t​ ​w​o​r​k​ ​-​ ​y​o​u​r​ ​D​e​f​g​u​a​r​d​ ​V​P​N​ ​i​s​ ​n​o​w​ ​a​c​t​i​v​e​!​*​*​
							​
							​I​f​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​d​i​s​e​n​g​a​g​e​ ​y​o​u​r​ ​V​P​N​ ​c​o​n​n​e​c​t​i​o​n​,​ ​s​i​m​p​l​y​ ​p​r​e​s​s​ ​"​d​e​a​c​t​i​v​a​t​e​"​.​
						
								 */
								finish: string
							}
						}
					}
				}
				finish: {
					/**
					 * C​o​n​f​i​g​u​r​a​t​i​o​n​ ​c​o​m​p​l​e​t​e​d​!
					 */
					title: string
				}
			}
		}
		sessionTimeout: {
			card: {
				/**
				 * S​e​s​s​i​o​n​ ​t​i​m​e​d​ ​o​u​t
				 */
				header: string
				/**
				 * S​o​r​r​y​,​ ​y​o​u​ ​h​a​v​e​ ​e​x​c​e​e​d​e​d​ ​t​h​e​ ​t​i​m​e​ ​l​i​m​i​t​ ​t​o​ ​c​o​m​p​l​e​t​e​ ​t​h​e​ ​p​r​o​c​e​s​s​.​ ​P​l​e​a​s​e​ ​t​r​y​ ​a​g​a​i​n​.​ ​I​f​ ​y​o​u​ ​n​e​e​d​ ​a​s​s​i​s​t​a​n​c​e​,​ ​p​l​e​a​s​e​ ​w​a​t​c​h​ ​o​u​r​ ​g​u​i​d​e​ ​o​r​ ​c​o​n​t​a​c​t​ ​y​o​u​r​ ​a​d​m​i​n​i​s​t​r​a​t​o​r​.
				 */
				message: string
			}
			controls: {
				/**
				 * E​n​t​e​r​ ​n​e​w​ ​t​o​k​e​n
				 */
				back: string
				/**
				 * C​o​n​t​a​c​t​ ​a​d​m​i​n
				 */
				contact: string
			}
		}
		token: {
			card: {
				/**
				 * P​l​e​a​s​e​,​ ​e​n​t​e​r​ ​y​o​u​r​ ​p​e​r​s​o​n​a​l​ ​e​n​r​o​l​l​m​e​n​t​ ​t​o​k​e​n
				 */
				title: string
				messageBox: {
					/**
					 * Y​o​u​ ​c​a​n​ ​f​i​n​d​ ​t​o​k​e​n​ ​i​n​ ​e​-​m​a​i​l​ ​m​e​s​s​a​g​e​ ​o​r​ ​u​s​e​ ​d​i​r​e​c​t​ ​l​i​n​k​.
					 */
					email: string
				}
				form: {
					errors: {
						token: {
							/**
							 * T​o​k​e​n​ ​i​s​ ​r​e​q​u​i​r​e​d
							 */
							required: string
						}
					}
					fields: {
						token: {
							/**
							 * T​o​k​e​n
							 */
							placeholder: string
						}
					}
					controls: {
						/**
						 * N​e​x​t
						 */
						submit: string
					}
				}
			}
		}
	}
}

export type TranslationFunctions = {
	time: {
		seconds: {
			/**
			 * second
			 */
			singular: () => LocalizedString
			/**
			 * seconds
			 */
			prular: () => LocalizedString
		}
		minutes: {
			/**
			 * minute
			 */
			singular: () => LocalizedString
			/**
			 * minutes
			 */
			prular: () => LocalizedString
		}
	}
	form: {
		errors: {
			/**
			 * Field is invalid
			 */
			invalid: () => LocalizedString
			/**
			 * Enter a valid E-mail
			 */
			email: () => LocalizedString
			/**
			 * Field is required
			 */
			required: () => LocalizedString
			/**
			 * Min length of {length}
			 */
			minLength: (arg: { length: number }) => LocalizedString
			/**
			 * Max length of {length}
			 */
			maxLength: (arg: { length: number }) => LocalizedString
			/**
			 * At least one special character
			 */
			specialsRequired: () => LocalizedString
			/**
			 * Special characters are forbidden
			 */
			specialsForbidden: () => LocalizedString
			/**
			 * At least one number required
			 */
			numberRequired: () => LocalizedString
			password: {
				/**
				 * Please correct the following:
				 */
				floatingTitle: () => LocalizedString
			}
			/**
			 * At least one lower case character
			 */
			oneLower: () => LocalizedString
			/**
			 * At least one upper case character
			 */
			oneUpper: () => LocalizedString
		}
	}
	common: {
		controls: {
			/**
			 * Back
			 */
			back: () => LocalizedString
			/**
			 * Next
			 */
			next: () => LocalizedString
			/**
			 * Submit
			 */
			submit: () => LocalizedString
			/**
			 * Cancel
			 */
			cancel: () => LocalizedString
			/**
			 * Close
			 */
			close: () => LocalizedString
			/**
			 * Reset
			 */
			reset: () => LocalizedString
		}
	}
	components: {
		adminInfo: {
			/**
			 * Your admin
			 */
			title: () => LocalizedString
		}
	}
	pages: {
		client: {
			/**
			 * Locations
			 */
			title: () => LocalizedString
			sideBar: {
				/**
				 * Instances
				 */
				instances: () => LocalizedString
				/**
				 * Add Instance
				 */
				addInstance: () => LocalizedString
				copyright: {
					/**
					 * Copyright © 2023
					 */
					copyright: () => LocalizedString
					/**
					 * Application version: {version}
					 */
					appVersion: (arg: { version: string }) => LocalizedString
				}
			}
			controls: {
				/**
				 * Connect
				 */
				connect: () => LocalizedString
				/**
				 * Disconnect
				 */
				disconnect: () => LocalizedString
			}
			header: {
				/**
				 * Locations
				 */
				title: () => LocalizedString
				filters: {
					views: {
						/**
						 * Grid View
						 */
						grid: () => LocalizedString
						/**
						 * Detail View
						 */
						detail: () => LocalizedString
					}
				}
			}
			connectionLabels: {
				/**
				 * Last connected from
				 */
				lastConnectedFrom: () => LocalizedString
				/**
				 * Last connected
				 */
				lastConnected: () => LocalizedString
				/**
				 * Assigned IP
				 */
				assignedIp: () => LocalizedString
			}
			/**
			 * This device was never connected to this location, connect to view statistics and information about connection
			 */
			locationNoData: () => LocalizedString
			detailView: {
				history: {
					/**
					 * Connection history
					 */
					title: () => LocalizedString
					headers: {
						/**
						 * Date
						 */
						date: () => LocalizedString
						/**
						 * Duration
						 */
						duration: () => LocalizedString
						/**
						 * Connected from
						 */
						connectedFrom: () => LocalizedString
						/**
						 * Upload
						 */
						upload: () => LocalizedString
						/**
						 * Download
						 */
						download: () => LocalizedString
					}
				}
			}
			modals: {
				addInstanceModal: {
					/**
					 * Add instance
					 */
					title: () => LocalizedString
					messages: {
						success: {
							/**
							 * Instance added
							 */
							add: () => LocalizedString
							/**
							 * Instance information updated
							 */
							update: () => LocalizedString
						}
						/**
						 * Operation failed, check url and token.
						 */
						error: () => LocalizedString
					}
					form: {
						fields: {
							token: {
								/**
								 * Token
								 */
								label: () => LocalizedString
							}
							url: {
								/**
								 * Proxy URL
								 */
								label: () => LocalizedString
							}
						}
					}
				}
			}
		}
		enrollment: {
			sideBar: {
				/**
				 * Enrollment
				 */
				title: () => LocalizedString
				steps: {
					/**
					 * Welcome
					 */
					welcome: () => LocalizedString
					/**
					 * Data verification
					 */
					verification: () => LocalizedString
					/**
					 * Create password
					 */
					password: () => LocalizedString
					/**
					 * Configure VPN
					 */
					vpn: () => LocalizedString
					/**
					 * Finish
					 */
					finish: () => LocalizedString
				}
				/**
				 * Application version
				 */
				appVersion: () => LocalizedString
			}
			stepsIndicator: {
				/**
				 * Step
				 */
				step: () => LocalizedString
				/**
				 * of
				 */
				of: () => LocalizedString
			}
			/**
			 * Time left
			 */
			timeLeft: () => LocalizedString
			steps: {
				welcome: {
					/**
					 * Hello, {name}
					 */
					title: (arg: { name: string }) => LocalizedString
					/**
					 * 
				In order to gain access to the company infrastructure, we require you to complete this enrollment process. During this process, you will need to:
			
				1. Verify your data
				2. Create your password
				3. Configurate VPN device
			
				You have a time limit of **{time} minutes** to complete this process.
				If you have any questions, please consult your assigned admin.All necessary information can be found at the bottom of the sidebar.
					 */
					explanation: (arg: { time: string }) => LocalizedString
				}
				dataVerification: {
					/**
					 * Data verification
					 */
					title: () => LocalizedString
					/**
					 * Please, check your data. If anything is wrong, notify your admin after you complete the process.
					 */
					messageBox: () => LocalizedString
					form: {
						fields: {
							firstName: {
								/**
								 * Name
								 */
								label: () => LocalizedString
							}
							lastName: {
								/**
								 * Last name
								 */
								label: () => LocalizedString
							}
							email: {
								/**
								 * E-mail
								 */
								label: () => LocalizedString
							}
							phone: {
								/**
								 * Phone number
								 */
								label: () => LocalizedString
							}
						}
					}
				}
				password: {
					/**
					 * Create password
					 */
					title: () => LocalizedString
					form: {
						fields: {
							password: {
								/**
								 * Create new password
								 */
								label: () => LocalizedString
							}
							repeat: {
								/**
								 * Confirm new password
								 */
								label: () => LocalizedString
								errors: {
									/**
									 * Passwords aren't matching
									 */
									matching: () => LocalizedString
								}
							}
						}
					}
				}
				deviceSetup: {
					/**
					 * * This step is OPTIONAL. You can skip it if you wish. This can be configured later in defguard.
					 */
					optionalMessage: () => LocalizedString
					cards: {
						device: {
							/**
							 * Configure your device for VPN
							 */
							title: () => LocalizedString
							create: {
								/**
								 * Create Configuration
								 */
								submit: () => LocalizedString
								/**
								 * Please be advised that you have to download the configuration now, since we do not store your private key. After this dialog is closed, you will not be able to get your fulll configuration file (with private keys, only blank template).
								 */
								messageBox: () => LocalizedString
								form: {
									fields: {
										name: {
											/**
											 * Device Name
											 */
											label: () => LocalizedString
										}
										'public': {
											/**
											 * My Public Key
											 */
											label: () => LocalizedString
										}
										toggle: {
											/**
											 * Generate key pair
											 */
											generate: () => LocalizedString
											/**
											 * Use my own public key
											 */
											own: () => LocalizedString
										}
									}
								}
							}
							config: {
								messageBox: {
									/**
									 * 
								       <p>
								          Please be advised that you have to download the configuration now,
								          since <strong>we do not</strong> store your private key. After this
								          dialog is closed, you <strong>will not be able</strong> to get your
								          full configuration file (with private keys, only blank template).
								        </p>
							
									 */
									auto: () => LocalizedString
									/**
									 * 
								        <p>
								          Please be advised that configuration provided here <strong> does not include private key and uses public key to fill it's place </strong> you will need to repalce it on your own for configuration to work properly.
								        </p>
							
									 */
									manual: () => LocalizedString
								}
								/**
								 * My Device Name
								 */
								deviceNameLabel: () => LocalizedString
								/**
								 * Use provided configuration file below by scanning QR Code or importing it as file on your devices WireGuard app.
								 */
								cardTitle: () => LocalizedString
								card: {
									/**
									 * Config file for location
									 */
									selectLabel: () => LocalizedString
								}
							}
						}
						guide: {
							/**
							 * Quick Guide
							 */
							title: () => LocalizedString
							/**
							 * This quick guide will help you with device configuration.
							 */
							messageBox: () => LocalizedString
							/**
							 * Step {step}:
							 */
							step: (arg: { step: number }) => LocalizedString
							steps: {
								wireguard: {
									/**
									 * Download and install WireGuard client on your compputer or app on phone.
									 */
									content: () => LocalizedString
									/**
									 * Download WireGuard
									 */
									button: () => LocalizedString
								}
								/**
								 * Download provided configuration file to your device.
								 */
								downloadConfig: () => LocalizedString
								/**
								 * Open WireGuard and select "Add Tunnel" (Import tunnel(s) from file). Find your
							Defguard configuration file and hit "OK". On phone use WireGuard app “+” icon and scan QR code.
								 */
								addTunnel: () => LocalizedString
								/**
								 * Select your tunnel from the list and press "activate".
								 */
								activate: () => LocalizedString
								/**
								 * 
							**Great work - your Defguard VPN is now active!**
						
							If you want to disengage your VPN connection, simply press "deactivate".
						
								 */
								finish: () => LocalizedString
							}
						}
					}
				}
				finish: {
					/**
					 * Configuration completed!
					 */
					title: () => LocalizedString
				}
			}
		}
		sessionTimeout: {
			card: {
				/**
				 * Session timed out
				 */
				header: () => LocalizedString
				/**
				 * Sorry, you have exceeded the time limit to complete the process. Please try again. If you need assistance, please watch our guide or contact your administrator.
				 */
				message: () => LocalizedString
			}
			controls: {
				/**
				 * Enter new token
				 */
				back: () => LocalizedString
				/**
				 * Contact admin
				 */
				contact: () => LocalizedString
			}
		}
		token: {
			card: {
				/**
				 * Please, enter your personal enrollment token
				 */
				title: () => LocalizedString
				messageBox: {
					/**
					 * You can find token in e-mail message or use direct link.
					 */
					email: () => LocalizedString
				}
				form: {
					errors: {
						token: {
							/**
							 * Token is required
							 */
							required: () => LocalizedString
						}
					}
					fields: {
						token: {
							/**
							 * Token
							 */
							placeholder: () => LocalizedString
						}
					}
					controls: {
						/**
						 * Next
						 */
						submit: () => LocalizedString
					}
				}
			}
		}
	}
}

export type Formatters = {}
