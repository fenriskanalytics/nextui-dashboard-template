// src/types/GICS.ts

export interface GICSSubIndustry {
    code: string;
    name: string;
    description: string;
}

export interface GICSIndustry {
    code: string;
    name: string;
    subIndustries: Record<string, GICSSubIndustry>;
}

export interface GICSIndustryGroup {
    code: string;
    name: string;
    industries: Record<string, GICSIndustry>;
}

export interface GICSSector {
    code: string;
    name: string;
    industryGroups: Record<string, GICSIndustryGroup>;
}

export const GICS: Record<string, GICSSector> = {
    "10": {
        code: "10",
        name: "Energy",
        industryGroups: {
            "1010": {
                code: "1010",
                name: "Energy",
                industries: {
                    "101010": {
                        code: "101010",
                        name: "Energy Equipment & Services",
                        subIndustries: {
                            "10101010": {
                                code: "10101010",
                                name: "Oil & Gas Drilling",
                                description: "Drilling contractors or owners of drilling rigs that contract their services for drilling wells."
                            },
                            "10101020": {
                                code: "10101020",
                                name: "Oil & Gas Equipment & Services",
                                description: "Manufacturers of equipment, including drilling rigs and equipment, and providers of supplies and services to companies involved in the drilling, evaluation and completion of oil and gas wells."
                            }
                        }
                    },
                    "101020": {
                        code: "101020",
                        name: "Oil, Gas & Consumable Fuels",
                        subIndustries: {
                            "10102010": {
                                code: "10102010",
                                name: "Integrated Oil & Gas",
                                description: "Integrated oil companies engaged in the exploration & production of oil and gas, as well as at least one other significant activity in either refining, marketing and transportation, or chemicals."
                            },
                            "10102020": {
                                code: "10102020",
                                name: "Oil & Gas Exploration & Production",
                                description: "Companies engaged in the exploration and production of oil and gas not classified elsewhere."
                            },
                            "10102030": {
                                code: "10102030",
                                name: "Oil & Gas Refining & Marketing",
                                description: "Companies engaged in the refining and marketing of oil, gas and/or refined products not classified in the Integrated Oil & Gas or Independent Power Producers & Energy Traders Sub-Industries."
                            },
                            "10102040": {
                                code: "10102040",
                                name: "Oil & Gas Storage & Transportation",
                                description: "Companies engaged in the storage and/or transportation of oil, gas and/or refined products."
                            },
                            "10102050": {
                                code: "10102050",
                                name: "Coal & Consumable Fuels",
                                description: "Companies primarily involved in the production and mining of coal, related products and other consumable fuels related to the generation of energy."
                            }
                        }
                    }
                }
            }
        }
    },
    "20": {
        code: "20",
        name: "Industrials",
        industryGroups: {
            "2010": {
                code: "2010",
                name: "Capital Goods",
                industries: {
                    "201010": {
                        code: "201010",
                        name: "Aerospace & Defense",
                        subIndustries: {
                            "20101010": {
                                code: "20101010",
                                name: "Aerospace & Defense",
                                description: "Manufacturers of civil or military aerospace and defense equipment, parts or products. Includes defense electronics and space equipment."
                            }
                        }
                    },
                    "201020": {
                        code: "201020",
                        name: "Building Products",
                        subIndustries: {
                            "20102010": {
                                code: "20102010",
                                name: "Building Products",
                                description: "Manufacturers of building components and home improvement products and equipment. Excludes lumber and plywood classified under Forest Products and cement and other materials classified in the Construction Materials Sub-Industry."
                            }
                        }
                    },
                    "201030": {
                        code: "201030",
                        name: "Construction & Engineering",
                        subIndustries: {
                            "20103010": {
                                code: "20103010",
                                name: "Construction & Engineering",
                                description: "Companies engaged in primarily non-residential construction. Includes civil engineering companies and large-scale contractors. Excludes companies classified in the Homebuilding Sub-Industry."
                            }
                        }
                    },
                    "201040": {
                        code: "201040",
                        name: "Electrical Equipment",
                        subIndustries: {
                            "20104010": {
                                code: "20104010",
                                name: "Electrical Components & Equipment",
                                description: "Companies that produce electric cables and wires, electrical components or equipment not classified in the Heavy Electrical Equipment Sub-Industry."
                            },
                            "20104020": {
                                code: "20104020",
                                name: "Heavy Electrical Equipment",
                                description: "Manufacturers of power-generating equipment and other heavy electrical equipment, including power turbines, heavy electrical machinery intended for fixed-use and large electrical systems. Excludes cables and wires, classified in the Electrical Components & Equipment Sub-Industry."
                            }
                        }
                    },
                    "201050": {
                        code: "201050",
                        name: "Industrial Conglomerates",
                        subIndustries: {
                            "20105010": {
                                code: "20105010",
                                name: "Industrial Conglomerates",
                                description: "Diversified industrial companies with business activities in three or more sectors, none of which contributes a majority of revenues. Stakes held are predominantly of a controlling nature and stake holders maintain an operational interest in the running of the subsidiaries."
                            }
                        }
                    },
                    "201060": {
                        code: "201060",
                        name: "Machinery",
                        subIndustries: {
                            "20106010": {
                                code: "20106010",
                                name: "Construction Machinery & Heavy Trucks",
                                description: "Manufacturers of heavy duty trucks, rolling machinery, earth-moving and construction equipment, and manufacturers of related parts. Includes non-military shipbuilding."
                            },
                            "20106015": {
                                code: "20106015",
                                name: "Agricultural & Farm Machinery",
                                description: "Companies manufacturing agricultural machinery, farm machinery, and their related parts. Includes machinery used for the production of crops and agricultural livestock, agricultural tractors, planting and fertilizing machinery, fertilizer and chemical application equipment, and grain dryers and blowers."
                            },
                            "20106020": {
                                code: "20106020",
                                name: "Industrial Machinery",
                                description: "Manufacturers of industrial machinery and industrial components. Includes companies that manufacture presses, machine tools, compressors, pollution control equipment, elevators, escalators, insulators, pumps, roller bearings and other metal fabrications."
                            }
                        }
                    },
                    "201070": {
                        code: "201070",
                        name: "Trading Companies & Distributors",
                        subIndustries: {
                            "20107010": {
                                code: "20107010",
                                name: "Trading Companies & Distributors",
                                description: "Trading companies and other distributors of industrial equipment and products."
                            }
                        }
                    }
                }
            },
            "2020": {
                code: "2020",
                name: "Commercial & Professional Services",
                industries: {
                    "202010": {
                        code: "202010",
                        name: "Commercial Services & Supplies",
                        subIndustries: {
                            "20201010": {
                                code: "20201010",
                                name: "Commercial Printing",
                                description: "Companies providing commercial printing services. Includes printers primarily serving the media industry."
                            },
                            "20201050": {
                                code: "20201050",
                                name: "Environmental & Facilities Services",
                                description: "Companies providing environmental and facilities maintenance services. Includes waste management, facilities management, and pollution control services. Excludes large-scale water treatment systems classified in the Water Utilities Sub-Industry."
                            },
                            "20201060": {
                                code: "20201060",
                                name: "Office Services & Supplies",
                                description: "Providers of office services and manufacturers of office supplies and equipment not classified elsewhere."
                            },
                            "20201070": {
                                code: "20201070",
                                name: "Diversified Support Services",
                                description: "Companies primarily providing labor oriented support services to businesses and governments. Includes commercial cleaning services, dining & catering services, equipment repair services, industrial maintenance services, industrial auctioneers, storage & warehousing, transaction services, uniform rental services, and other business support services."
                            },
                            "20201080": {
                                code: "20201080",
                                name: "Security & Alarm Services",
                                description: "Companies providing security and protection services to business and governments. Includes companies providing services such as correctional facilities, security & alarm services, armored transportation & guarding. Excludes companies providing security software classified under the Systems Software Sub-Industry and home security services classified under the Specialized Consumer Services Sub-Industry. Also excludes companies manufacturing security system equipment classified under the Electronic Equipment & Instruments Sub-Industry."
                            }
                        }
                    },
                    "202020": {
                        code: "202020",
                        name: "Professional Services",
                        subIndustries: {
                            "20202010": {
                                code: "20202010",
                                name: "Human Resource & Employment Services",
                                description: "Companies providing business support services relating to human capital management. This Sub-Industry includes employment agencies, employee training, payroll processing, benefit & retirement support services, corporate & job seeker recruitment services, and online job portals generating revenue from fees or commissions for offering recruitment services to companies or job seekers."
                            },
                            "20202020": {
                                code: "20202020",
                                name: "Research & Consulting Services",
                                description: "Companies primarily providing research and consulting services to businesses and governments not classified elsewhere. Includes companies involved in management consulting services, architectural design, business information or scientific research, marketing, and testing & certification services. Excludes companies providing information technology consulting services classified in the IT Consulting & Other Services Sub-Industry."
                            },
                            "20202030": {
                                code: "20202030",
                                name: "Data Processing & Outsourced Services",
                                description: "Providers of commercial data processing and/or business process outsourcing services. This Sub-Industry includes companies providing services for customer experience management, back-office automation, call center management, and investor communications."
                            }
                        }
                    }
                }
            },
            "2030": {
                code: "2030",
                name: "Transportation",
                industries: {
                    "203010": {
                        code: "203010",
                        name: "Air Freight & Logistics",
                        subIndustries: {
                            "20301010": {
                                code: "20301010",
                                name: "Air Freight & Logistics",
                                description: "Companies providing air freight transportation, courier and logistics services, including package and mail delivery and customs agents. Excludes those companies classified in the Passenger Airlines, Marine Transportation, Cargo Ground Transportation and Passenger Ground Transportation Sub-Industries."
                            }
                        }
                    },
                    "203020": {
                        code: "203020",
                        name: "Passenger Airlines",
                        subIndustries: {
                            "20302010": {
                                code: "20302010",
                                name: "Passenger Airlines",
                                description: "Companies providing primarily passenger air transportation."
                            }
                        }
                    },
                    "203030": {
                        code: "203030",
                        name: "Marine Transportation",
                        subIndustries: {
                            "20303010": {
                                code: "20303010",
                                name: "Marine Transportation",
                                description: "Companies providing goods or passenger maritime transportation. Excludes cruise-ships classified in the Hotels, Resorts & Cruise Lines Sub-Industry."
                            }
                        }
                    },
                    "203040": {
                        code: "203040",
                        name: "Ground Transportation",
                        subIndustries: {
                            "20304010": {
                                code: "20304010",
                                name: "Rail Transportation",
                                description: "Companies providing primarily goods and passenger rail transportation."
                            },
                            "20304020": {
                                code: "20304020",
                                name: "Trucking",
                                description: "Companies providing primarily goods and passenger land transportation. Includes vehicle rental and taxi companies."
                            },
                            "20304030": {
                                code: "20304030",
                                name: "Cargo Ground Transportation",
                                description: "Companies providing ground transportation services for goods and freight."
                            },
                            "20304040": {
                                code: "20304040",
                                name: "Passenger Ground Transportation",
                                description: "Companies providing passenger ground transportation and related services, including bus, taxi, vehicle rental, ride sharing and on-demand ride sharing platforms, and other passenger logistics."
                            }
                        }
                    },
                    "203050": {
                        code: "203050",
                        name: "Transportation Infrastructure",
                        subIndustries: {
                            "20305010": {
                                code: "20305010",
                                name: "Airport Services",
                                description: "Operators of airports and companies providing related services."
                            },
                            "20305020": {
                                code: "20305020",
                                name: "Highways & Railtracks",
                                description: "Owners and operators of roads, tunnels and railtracks."
                            },
                            "20305030": {
                                code: "20305030",
                                name: "Marine Ports & Services",
                                description: "Owners and operators of marine ports and related services."
                            }
                        }
                    }
                }
            }
        }
    },    
    "40": {
        code: "40",
        name: "Financials",
        industryGroups: {
            "4010": {
                code: "4010",
                name: "Banks",
                industries: {
                    "401010": {
                        code: "401010",
                        name: "Banks",
                        subIndustries: {
                            "40101010": {
                                code: "40101010",
                                name: "Diversified Banks",
                                description: "Large, geographically diverse banks with a national footprint whose revenues are derived primarily from conventional banking operations, have significant business activity in retail banking and small and medium corporate lending, and provide a diverse range of financial services."
                            },
                            "40101015": {
                                code: "40101015",
                                name: "Regional Banks",
                                description: "Commercial banks, savings banks and thrifts whose business are derived primarily from conventional banking operations such as retail banking, corporate lending and originating various residential and commercial mortgage loans funded mainly through deposits. Regional banks tend to operate in limited geographic regions."
                            }
                        }
                    }
                }
            },
                "4020": {
                    code: "4020",
                    name: "Financial Services",
                    industries: {
                        "402010": {
                            code: "402010",
                            name: "Diversified Financial Services",
                            subIndustries: {
                                "40201020": {
                                    code: "40201020",
                                    name: "Diversified Financial Services",
                                    description: "Providers of a diverse range of financial services and/or with some interest in a wide range of financial services including banking, insurance, and capital markets, but with no dominant business line. Excludes companies classified in the Regional Banks and Diversified Banks Sub-Industries."
                                },
                                "40201030": {
                                    code: "40201030",
                                    name: "Multi-Sector Holdings",
                                    description: "A company with significantly diversified holdings across three or more sectors, none of which contributes a majority of profit and/or sales. Stakes held are predominantly of a non-controlling nature. Includes diversified financial companies where stakes held are of a controlling nature. Excludes other diversified companies classified in the Industrials Conglomerates Sub-Industry."
                                },
                                "40201040": {
                                    code: "40201040",
                                    name: "Specialized Finance",
                                    description: "Providers of specialized financial services not classified elsewhere. Companies in this Sub-Industry derive a majority of revenue from one specialized line of business. Includes, but not limited to, commercial financing companies, central banks, leasing institutions, factoring services, and specialty boutiques. Excludes companies classified in the Financial Exchanges & Data Sub-Industry."
                                },
                                "40201050": {
                                    code: "40201050",
                                    name: "Commercial & Residential Mortgage Finance",
                                    description: "Financial companies providing commercial and residential mortgage financing and related mortgage services. This Sub-Industry includes non-deposit funded mortgage lending institutions, building societies, companies providing real estate financing products, loan servicing, mortgage broker services, and mortgage insurance."
                                },
                                "40201060": {
                                    code: "40201060",
                                    name: "Transaction & Payment Processing Services",
                                    description: "Providers of transaction & payment processing services and related payment services including digital/mobile payment processors, payment service providers & gateways, and digital wallet providers."
                                }
                            }
                        },
                        "402020": {
                            code: "402020",
                            name: "Consumer Finance",
                            subIndustries: {
                                "40202010": {
                                    code: "40202010",
                                    name: "Consumer Finance",
                                    description: "Providers of consumer finance services, including personal credit, credit cards, lease financing, travel-related money services and pawn shops. Excludes mortgage lenders classified in the Commercial & Residential Mortgage Finance Sub-Industry."
                                }
                            }
                        },
                        "402030": {
                            code: "402030",
                            name: "Capital Markets",
                            subIndustries: {
                                "40203010": {
                                    code: "40203010",
                                    name: "Asset Management & Custody Banks",
                                    description: "Financial institutions primarily engaged in investment management and/or related custody and securities fee-based services. Includes companies operating mutual funds, closed-end funds and unit investment trusts. Excludes banks and other financial institutions primarily involved in commercial lending, investment banking, brokerage and other specialized financial activities."
                                },
                                "40203020": {
                                    code: "40203020",
                                    name: "Investment Banking & Brokerage",
                                    description: "Financial institutions primarily engaged in investment banking & brokerage services, including equity and debt underwriting, mergers and acquisitions, securities lending and advisory services. Excludes banks and other financial institutions primarily involved in commercial lending, asset management and specialized financial activities."
                                },
                                "40203030": {
                                    code: "40203030",
                                    name: "Diversified Capital Markets",
                                    description: "Financial institutions primarily engaged in diversified capital markets activities, including a significant presence in at least two of the following area: large/major corporate lending, investment banking, brokerage and asset management. Excludes less diversified companies classified in the Asset Management & Custody Banks or Investment Banking & Brokerage Sub-Industries. Also excludes companies classified in the Banks or Insurance industry groups or the Consumer Finance Sub-Industry."
                                },
                                "40203040": {
                                    code: "40203040",
                                    name: "Financial Exchanges & Data",
                                    description: "Financial exchanges for securities, commodities, derivatives and other financial instruments, and providers of financial decision support tools and products including ratings agencies."
                                }
                            }
                        },
                        "402040": {
                            code: "402040",
                            name: "Mortgage Real Estate Investment Trusts (REITs)",
                            subIndustries: {
                                "40204010": {
                                    code: "40204010",
                                    name: "Mortgage REITs",
                                    description: "Companies or Trusts that service, originate, purchase and/or securitize residential and/or commercial mortgage loans. Includes trusts that invest in mortgage-backed securities and other mortgage related assets."
                                }
                            }
                        }
                    }
                },
                "4030": {
                    code: "4030",
                    name: "Insurance",
                    industries: {
                        "403010": {
                            code: "403010",
                            name: "Insurance",
                            subIndustries: {
                                "40301010": {
                                    code: "40301010",
                                    name: "Insurance Brokers",
                                    description: "Insurance and reinsurance brokerage firms."
                                },
                                "40301020": {
                                    code: "40301020",
                                    name: "Life & Health Insurance",
                                    description: "Companies providing primarily life, disability, indemnity or supplemental health insurance. Excludes managed care companies classified in the Managed Health Care Sub-Industry."
                                },
                                "40301030": {
                                    code: "40301030",
                                    name: "Multi-line Insurance",
                                    description: "Insurance companies with diversified interests in life, health and property and casualty insurance."
                                },
                                "40301040": {
                                    code: "40301040",
                                    name: "Property & Casualty Insurance",
                                    description: "Companies providing primarily property and casualty insurance."
                                },
                                "40301050": {
                                    code: "40301050",
                                    name: "Reinsurance",
                                    description: "Companies providing primarily reinsurance."
                                }
                            }
                        }
                    }
                }
            }
        },
    "30": {
        code: "30",
        name: "Consumer Staples",
        industryGroups: {
            "3010": {
                code: "3010",
                name: "Consumer Staples Distribution & Retail",
                industries: {
                    "301010": {
                        code: "301010",
                        name: "Consumer Staples Distribution & Retail",
                        subIndustries: {
                            "30101010": {
                                code: "30101010",
                                name: "Drug Retail",
                                description: "Owners and operators of primarily drug retail stores and pharmacies."
                            },
                            "30101020": {
                                code: "30101020",
                                name: "Food Distributors",
                                description: "Distributors of food products to other companies and not directly to the consumer."
                            },
                            "30101030": {
                                code: "30101030",
                                name: "Food Retail",
                                description: "Owners and operators of primarily food retail stores."
                            },
                            "30101040": {
                                code: "30101040",
                                name: "Consumer Staples Merchandise Retail",
                                description: "Retailers offering a wide range of consumer staples merchandise such as food, household, and personal care products. This sub-industry includes hypermarkets, super centers, and other consumer staples retailers."
                            }
                        }
                    }
                }
            },
            "3020": {
                code: "3020",
                name: "Food, Beverage & Tobacco",
                industries: {
                    "302010": {
                        code: "302010",
                        name: "Beverages",
                        subIndustries: {
                            "30201010": {
                                code: "30201010",
                                name: "Brewers",
                                description: "Producers of beer and malt liquors. Includes breweries not classified in the Restaurants Sub-Industry."
                            },
                            "30201020": {
                                code: "30201020",
                                name: "Distillers & Vintners",
                                description: "Distillers, vintners, and producers of alcoholic beverages not classified in the Brewers Sub-Industry."
                            },
                            "30201030": {
                                code: "30201030",
                                name: "Soft Drinks & Non-alcoholic Beverages",
                                description: "Producers of non-alcoholic beverages including mineral waters and soft drinks."
                            }
                        }
                    },
                    "302020": {
                        code: "302020",
                        name: "Food Products",
                        subIndustries: {
                            "30202010": {
                                code: "30202010",
                                name: "Agricultural Products",
                                description: "Producers of agricultural products. Includes crop growers, owners of plantations and companies that produce and process foods but do not package and market them."
                            },
                            "30202030": {
                                code: "30202030",
                                name: "Packaged Foods & Meats",
                                description: "Producers of packaged foods including dairy products, fruit juices, meats, poultry, fish, and pet foods."
                            }
                        }
                    },
                    "302030": {
                        code: "302030",
                        name: "Tobacco",
                        subIndustries: {
                            "30203010": {
                                code: "30203010",
                                name: "Tobacco",
                                description: "Manufacturers of cigarettes and other tobacco products."
                            }
                        }
                    }
                }
            },
            "3030": {
                code: "3030",
                name: "Household & Personal Products",
                industries: {
                    "303010": {
                        code: "303010",
                        name: "Household Products",
                        subIndustries: {
                            "30301010": {
                                code: "30301010",
                                name: "Household Products",
                                description: "Producers of non-durable household products, including detergents, soaps, diapers, and other tissue and household paper products not classified in the Paper Products Sub-Industry."
                            }
                        }
                    },
                    "303020": {
                        code: "303020",
                        name: "Personal Products",
                        subIndustries: {
                            "30302010": {
                                code: "30302010",
                                name: "Personal Products",
                                description: "Manufacturers of personal and beauty care products, including cosmetics and perfumes."
                            }
                        }
                    }
                }
            }
        }
    },
    "50": {
        code: "50",
        name: "Communication Services",
        industryGroups: {
            "5010": {
                code: "5010",
                name: "Telecommunication Services",
                industries: {
                    "501010": {
                        code: "501010",
                        name: "Diversified Telecommunication Services",
                        subIndustries: {
                            "50101010": {
                                code: "50101010",
                                name: "Alternative Carriers",
                                description: "Providers of communications and high-density data transmission services primarily through a high bandwidth/fiber-optic cable network."
                            },
                            "50101020": {
                                code: "50101020",
                                name: "Integrated Telecommunication Services",
                                description: "Operators of primarily fixed-line telecommunications networks and companies providing both wireless and fixed-line telecommunications services not classified elsewhere."
                            }
                        }
                    },
                    "501020": {
                        code: "501020",
                        name: "Wireless Telecommunication Services",
                        subIndustries: {
                            "50102010": {
                                code: "50102010",
                                name: "Wireless Telecommunication Services",
                                description: "Providers of primarily cellular or wireless telecommunication services."
                            }
                        }
                    }
                }
            },
            "5020": {
                code: "5020",
                name: "Media & Entertainment",
                industries: {
                    "502010": {
                        code: "502010",
                        name: "Media",
                        subIndustries: {
                            "50201010": {
                                code: "50201010",
                                name: "Advertising",
                                description: "Companies providing advertising, marketing or public relations services."
                            },
                            "50201020": {
                                code: "50201020",
                                name: "Broadcasting",
                                description: "Owners and operators of television or radio broadcasting systems, including programming. Includes radio and television broadcasting, radio networks, and radio stations."
                            },
                            "50201030": {
                                code: "50201030",
                                name: "Cable & Satellite",
                                description: "Providers of cable or satellite television services. Includes cable networks and program distribution."
                            },
                            "50201040": {
                                code: "50201040",
                                name: "Publishing",
                                description: "Publishers of newspapers, magazines and books in print or electronic formats."
                            }
                        }
                    },
                    "502020": {
                        code: "502020",
                        name: "Entertainment",
                        subIndustries: {
                            "50202010": {
                                code: "50202010",
                                name: "Movies & Entertainment",
                                description: "Companies that engage in producing and selling entertainment products and services, including companies engaged in the production, distribution, and screening of movies and television shows, producers and distributors of music, and entertainment theaters and sports teams."
                            },
                            "50202020": {
                                code: "50202020",
                                name: "Interactive Home Entertainment",
                                description: "Producers of interactive gaming products, including mobile gaming applications. Also includes educational software used primarily in the home."
                            }
                        }
                    },
                    "502030": {
                        code: "502030",
                        name: "Interactive Media & Services",
                        subIndustries: {
                            "50203010": {
                                code: "50203010",
                                name: "Interactive Media & Services",
                                description: "Companies engaging in content and information creation or distribution through proprietary platforms, where revenues are derived primarily through pay-per-click advertisements. Includes search engines, social media and networking platforms, online classifieds, and online review companies."
                            }
                        }
                    }
                }
            }
        }
    },
    "15": {
        code: "15",
        name: "Materials",
        industryGroups: {
            "1510": {
                code: "1510",
                name: "Materials",
                industries: {
                    "151010": {
                        code: "151010",
                        name: "Chemicals",
                        subIndustries: {
                            "15101010": {
                                code: "15101010",
                                name: "Commodity Chemicals",
                                description: "Companies that primarily produce industrial chemicals and basic chemicals. Including but not limited to plastics, synthetic fibers, films, commodity-based paints & pigments, explosives and petrochemicals."
                            },
                            "15101020": {
                                code: "15101020",
                                name: "Diversified Chemicals",
                                description: "Manufacturers of a diversified range of chemical products."
                            },
                            "15101030": {
                                code: "15101030",
                                name: "Fertilizers & Agricultural Chemicals",
                                description: "Producers of fertilizers, pesticides, potash or other agriculture-related chemicals."
                            },
                            "15101040": {
                                code: "15101040",
                                name: "Industrial Gases",
                                description: "Manufacturers of industrial gases."
                            },
                            "15101050": {
                                code: "15101050",
                                name: "Specialty Chemicals",
                                description: "Companies that primarily produce high value-added chemicals used in the manufacture of a wide variety of products."
                            }
                        }
                    },
                    "151020": {
                        code: "151020",
                        name: "Construction Materials",
                        subIndustries: {
                            "15102010": {
                                code: "15102010",
                                name: "Construction Materials",
                                description: "Manufacturers of construction materials including sand, clay, gypsum, lime, aggregates, cement, concrete and bricks."
                            }
                        }
                    },
                    "151030": {
                        code: "151030",
                        name: "Containers & Packaging",
                        subIndustries: {
                            "15103010": {
                                code: "15103010",
                                name: "Metal, Glass & Plastic Containers",
                                description: "Manufacturers of metal, glass or plastic containers."
                            },
                            "15103020": {
                                code: "15103020",
                                name: "Paper & Plastic Packaging Products & Materials",
                                description: "Manufacturers of paper and cardboard containers and packaging."
                            }
                        }
                    }
                }
            }
        }
    },
    "25": {
        code: "25",
        name: "Consumer Discretionary",
        industryGroups: {
            "2510": {
                code: "2510",
                name: "Automobiles & Components",
                industries: {
                    "251010": {
                        code: "251010",
                        name: "Automobile Components",
                        subIndustries: {
                            "25101010": {
                                code: "25101010",
                                name: "Automotive Parts & Equipment",
                                description: "Manufacturers of parts and accessories for automobiles and motorcycles. Excludes companies classified in the Tires & Rubber Sub-Industry."
                            },
                            "25101020": {
                                code: "25101020",
                                name: "Tires & Rubber",
                                description: "Manufacturers of tires and rubber."
                            }
                        }
                    },
                    "251020": {
                        code: "251020",
                        name: "Automobiles",
                        subIndustries: {
                            "25102010": {
                                code: "25102010",
                                name: "Automobile Manufacturers",
                                description: "Companies that produce mainly passenger automobiles and light trucks. Excludes companies producing mainly motorcycles and three-wheelers classified in the Motorcycle Manufacturers Sub-Industry and heavy duty trucks classified in the Construction Machinery & Heavy Transportation Equipment Sub-Industry."
                            },
                            "25102020": {
                                code: "25102020",
                                name: "Motorcycle Manufacturers",
                                description: "Companies that produce motorcycles, scooters or three-wheelers. Excludes bicycles classified in the Leisure Products Sub-Industry."
                            }
                        }
                    }
                }
            },
            "2520": {
                code: "2520",
                name: "Consumer Durables & Apparel",
                industries: {
                    "252010": {
                        code: "252010",
                        name: "Household Durables",
                        subIndustries: {
                            "25201010": {
                                code: "25201010",
                                name: "Consumer Electronics",
                                description: "Manufacturers of consumer electronics products including TVs, home audio equipment, game consoles, digital cameras, and related products. Excludes personal home computer manufacturers classified in the Technology Hardware, Storage & Peripherals Sub-Industry, and electric household appliances classified in the Household Appliances Sub-Industry."
                            },
                            "25201020": {
                                code: "25201020",
                                name: "Home Furnishings",
                                description: "Manufacturers of soft home furnishings or furniture, including upholstery, carpets and wall-coverings."
                            },
                            "25201030": {
                                code: "25201030",
                                name: "Homebuilding",
                                description: "Residential construction companies. Includes manufacturers of prefabricated houses and semi-fixed manufactured homes."
                            },
                            "25201040": {
                                code: "25201040",
                                name: "Household Appliances",
                                description: "Manufacturers of electric household appliances and related products. Includes manufacturers of power and hand tools, including garden improvement tools."
                            },
                            "25201050": {
                                code: "25201050",
                                name: "Housewares & Specialties",
                                description: "Manufacturers of durable household products, including cutlery, cookware, glassware, crystal, silverware, utensils, kitchenware and consumer specialties not classified elsewhere."
                            }
                        }
                    },
                    "252020": {
                        code: "252020",
                        name: "Leisure Products",
                        subIndustries: {
                            "25202010": {
                                code: "25202010",
                                name: "Leisure Products",
                                description: "Manufacturers of leisure products and equipment including sports equipment, bicycles, and toys."
                            }
                        }
                    },
                    "252030": {
                        code: "252030",
                        name: "Textiles, Apparel & Luxury Goods",
                        subIndustries: {
                            "25203010": {
                                code: "25203010",
                                name: "Apparel, Accessories & Luxury Goods",
                                description: "Manufacturers of apparel, accessories & luxury goods. Includes companies primarily producing designer handbags, wallets, luggage, jewelry, and watches. Excludes shoes classified in the Footwear Sub-Industry."
                            },
                            "25203020": {
                                code: "25203020",
                                name: "Footwear",
                                description: "Manufacturers of footwear. Includes sport and leather shoes."
                            },
                            "25203030": {
                                code: "25203030",
                                name: "Textiles",
                                description: "Manufacturers of textile and related products not classified in the Apparel, Accessories & Luxury Goods, Footwear, or Home Furnishings Sub-Industries."
                            }
                        }
                    }
                }
            },
            "2530": {
                code: "2530",
                name: "Consumer Services",
                industries: {
                    "253010": {
                        code: "253010",
                        name: "Hotels, Restaurants & Leisure",
                        subIndustries: {
                            "25301010": {
                                code: "25301010",
                                name: "Casinos & Gaming",
                                description: "Owners and operators of casinos and gaming facilities."
                            },
                            "25301020": {
                                code: "25301020",
                                name: "Hotels, Resorts & Cruise Lines",
                                description: "Owners and operators of hotels, resorts and cruise-ships."
                            },
                            "25301030": {
                                code: "25301030",
                                name: "Leisure Facilities",
                                description: "Owners and operators of leisure facilities."
                            },
                            "25301040": {
                                code: "25301040",
                                name: "Restaurants",
                                description: "Owners and operators of restaurants, bars, pubs, fast-food or take-out facilities."
                            }
                        }
                    },
                    "253020": {
                        code: "253020",
                        name: "Diversified Consumer Services",
                        subIndustries: {
                            "25302010": {
                                code: "25302010",
                                name: "Education Services",
                                description: "Companies providing educational services."
                            },
                            "25302020": {
                                code: "25302020",
                                name: "Specialized Consumer Services",
                                description: "Companies providing consumer services not classified elsewhere."
                            }
                        }
                    }
                }
            }
        }
    },
    "35": {
        code: "35",
        name: "Health Care",
        industryGroups: {
            "3510": {
                code: "3510",
                name: "Health Care Equipment & Services",
                industries: {
                    "351010": {
                        code: "351010",
                        name: "Health Care Equipment & Supplies",
                        subIndustries: {
                            "35101010": {
                                code: "35101010",
                                name: "Health Care Equipment",
                                description: "Manufacturers of health care equipment and devices. Includes medical instruments, drug delivery systems, cardiovascular & orthopedic devices, and diagnostic equipment."
                            },
                            "35101020": {
                                code: "35101020",
                                name: "Health Care Supplies",
                                description: "Manufacturers of health care supplies and medical products not classified elsewhere. Includes eye care products, hospital supplies, and safety needle & syringe devices."
                            }
                        }
                    },
                    "351020": {
                        code: "351020",
                        name: "Health Care Providers & Services",
                        subIndustries: {
                            "35102010": {
                                code: "35102010",
                                name: "Health Care Distributors",
                                description: "Distributors and wholesalers of health care products not classified elsewhere."
                            },
                            "35102015": {
                                code: "35102015",
                                name: "Health Care Services",
                                description: "Providers of patient health care services not classified elsewhere. Includes dialysis centers, lab testing services, and pharmacy management services."
                            },
                            "35102020": {
                                code: "35102020",
                                name: "Health Care Facilities",
                                description: "Owners and operators of health care facilities, including hospitals, nursing homes, rehabilitation centers and animal hospitals."
                            },
                            "35102030": {
                                code: "35102030",
                                name: "Managed Health Care",
                                description: "Owners and operators of Health Maintenance Organizations (HMOs) and other managed plans."
                            }
                        }
                    },
                    "351030": {
                        code: "351030",
                        name: "Health Care Technology",
                        subIndustries: {
                            "35103010": {
                                code: "35103010",
                                name: "Health Care Technology",
                                description: "Companies providing information technology services primarily to health care providers. Includes companies providing application, systems and/or data processing software, internet-based tools, and IT consulting services to doctors, hospitals or businesses operating primarily in the Health Care Sector."
                            }
                        }
                    }
                }
            },
            "3520": {
                code: "3520",
                name: "Pharmaceuticals, Biotechnology & Life Sciences",
                industries: {
                    "352010": {
                        code: "352010",
                        name: "Biotechnology",
                        subIndustries: {
                            "35201010": {
                                code: "35201010",
                                name: "Biotechnology",
                                description: "Companies primarily engaged in the research, development, manufacturing and/or marketing of products based on genetic analysis and genetic engineering. Includes companies specializing in protein-based therapeutics to treat human diseases."
                            }
                        }
                    },
                    "352020": {
                        code: "352020",
                        name: "Pharmaceuticals",
                        subIndustries: {
                            "35202010": {
                                code: "35202010",
                                name: "Pharmaceuticals",
                                description: "Companies engaged in the research, development or production of pharmaceuticals. Includes veterinary drugs."
                            }
                        }
                    },
                    "352030": {
                        code: "352030",
                        name: "Life Sciences Tools & Services",
                        subIndustries: {
                            "35203010": {
                                code: "35203010",
                                name: "Life Sciences Tools & Services",
                                description: "Companies enabling the drug discovery, development and production continuum by providing analytical tools, instruments, consumables & supplies, clinical trial services and contract research services. Includes firms primarily servicing the pharmaceutical and biotechnology industries."
                            }
                        }
                    }
                }
            }
        }
    },        
    "55": {
        code: "55",
        name: "Utilities",
        industryGroups: {
            "5510": {
                code: "5510",
                name: "Utilities",
                industries: {
                    "551010": {
                        code: "551010",
                        name: "Electric Utilities",
                        subIndustries: {
                            "55101010": {
                                code: "55101010",
                                name: "Electric Utilities",
                                description: "Companies that produce or distribute electricity. Includes both nuclear and non-nuclear facilities."
                            }
                        }
                    },
                    "551020": {
                        code: "551020",
                        name: "Gas Utilities",
                        subIndustries: {
                            "55102010": {
                                code: "55102010",
                                name: "Gas Utilities",
                                description: "Companies whose main charter is to distribute and transmit natural and manufactured gas."
                            }
                        }
                    },
                    "551030": {
                        code: "551030",
                        name: "Multi-Utilities",
                        subIndustries: {
                            "55103010": {
                                code: "55103010",
                                name: "Multi-Utilities",
                                description: "Utility companies with significantly diversified activities in addition to core Electric Utility, Gas Utility and/or Water Utility operations."
                            }
                        }
                    },
                    "551040": {
                        code: "551040",
                        name: "Water Utilities",
                        subIndustries: {
                            "55104010": {
                                code: "55104010",
                                name: "Water Utilities",
                                description: "Companies that purchase and redistribute water to the end-consumer."
                            }
                        }
                    },
                    "551050": {
                        code: "551050",
                        name: "Independent Power and Renewable Electricity Producers",
                        subIndustries: {
                            "55105010": {
                                code: "55105010",
                                name: "Independent Power Producers & Energy Traders",
                                description: "Companies that operate as Independent Power Producers (IPPs), Gas & Power Marketing & Trading Specialists and/or Integrated Energy Merchants."
                            },
                            "55105020": {
                                code: "55105020",
                                name: "Renewable Electricity",
                                description: "Companies that engage in the generation and distribution of electricity using renewable sources."
                            }
                        }
                    }
                }
            }
        }
    }
};
