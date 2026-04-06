"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [76361], {
        137938: (e, t, r) => {
            r.d(t, {
                u_: () => v,
                LP: () => c,
                bq: () => f,
                Qi: () => m,
                Ux: () => p,
                MB: () => d
            }), r(16280), r(18107), r(944114), r(269479), r(967357), r(898992), r(823215), r(354520), r(672577), r(430670), r(803949), r(581454), r(908872), r(737550);
            var n = () => r(30192),
                a = () => r(297493),
                o = () => r(400558);
            let i = (0, r(109939).YK)({
                if: {
                    id: "database.formula2.operator.if.description",
                    defaultMessage: "Returns the first value if the condition is true; otherwise, returns the second value."
                },
                ifs: {
                    id: "database.formula2.operator.ifs.description",
                    defaultMessage: "Returns the value that corresponds to the first true condition. This can be used as an alternative to multiple nested if() statements."
                },
                e: {
                    id: "database.formula2.constant.e.description",
                    defaultMessage: "Returns the base of the natural logarithm."
                },
                pi: {
                    id: "database.formula2.constant.pi.description",
                    defaultMessage: "Returns the ratio of a circle’s circumference to its diameter."
                },
                add: {
                    id: "database.formula2.operator.add.description",
                    defaultMessage: "Returns the sum of two numbers."
                },
                at: {
                    id: "database.formula2.operator.at.description",
                    defaultMessage: "Returns the value at the specified index in a list."
                },
                every: {
                    id: "database.formula2.operator.every.description",
                    defaultMessage: "Returns true if every item in the list satisfies the given condition, and false otherwise."
                },
                filter: {
                    id: "database.formula2.operator.filter.description",
                    defaultMessage: "Returns the values in the list for which the condition is true."
                },
                find: {
                    id: "database.formula2.operator.find.description",
                    defaultMessage: "Returns the first element in the list for which the condition returns true."
                },
                first: {
                    id: "database.formula2.operator.first.description",
                    defaultMessage: "Returns the first item in the list."
                },
                flat: {
                    id: "database.formula2.operator.flat.description",
                    defaultMessage: "Flattens a list of lists into a single list."
                },
                includes: {
                    id: "database.formula2.operator.includes.description",
                    defaultMessage: "Returns true if the list contains the specified value, and false otherwise."
                },
                last: {
                    id: "database.formula2.operator.last.description",
                    defaultMessage: "Returns the last item in the list."
                },
                map: {
                    id: "database.formula2.operator.map.description",
                    defaultMessage: "Returns the list populated with the results of calling the expression on every item in the input list."
                },
                reverse: {
                    id: "database.formula2.operator.reverse.description",
                    defaultMessage: "Returns the reversed list."
                },
                slice: {
                    id: "database.formula2.operator.slice.description",
                    defaultMessage: "Returns the items of the list from the provided start index (inclusive) to the end index (optional and exclusive)."
                },
                splice: {
                    id: "database.formula2.operator.splice.description",
                    defaultMessage: "Removes a specified number of elements from a list at the startIndex and optionally inserts new elements at that position. If deleteCount is not provided, it defaults to 0."
                },
                findIndex: {
                    id: "database.formula2.operator.findIndex.description",
                    defaultMessage: "Returns the index of the first item in the list for which the condition evaluates to true."
                },
                unique: {
                    id: "database.formula2.operator.unique.description",
                    defaultMessage: "Returns the list of unique values in the input list."
                },
                toPlainText: {
                    id: "database.formula2.operator.toPlainText.description",
                    defaultMessage: "Returns the plain text representation of the input text."
                },
                toText: {
                    id: "database.formula2.operator.toText.description",
                    defaultMessage: "Returns the text representation of the input value."
                },
                sort: {
                    id: "database.formula2.operator.sort.description",
                    defaultMessage: "Returns the list in sorted order. Optionally, a provided expression can be used to determine the sorting order."
                },
                some: {
                    id: "database.formula2.operator.some.description",
                    defaultMessage: "Returns true if any item in the list satisfies the given condition, and false otherwise."
                },
                let: {
                    id: "database.formula2.operator.let.description",
                    defaultMessage: "Assigns a value to a variable and evaluates the expression using that variable."
                },
                lets: {
                    id: "database.formula2.operator.lets.description",
                    defaultMessage: "Assigns values to multiple variables and evaluates the expression using those variables."
                },
                sum: {
                    id: "database.formula2.operator.sum.description",
                    defaultMessage: "Returns the sum of its arguments."
                },
                subtract: {
                    id: "database.formula2.operator.subtract.description",
                    defaultMessage: "Returns the difference of two numbers."
                },
                multiply: {
                    id: "database.formula2.operator.multiply.description",
                    defaultMessage: "Returns the product of two numbers."
                },
                divide: {
                    id: "database.formula2.operator.divide.description",
                    defaultMessage: "Returns the quotient of two numbers."
                },
                pow: {
                    id: "database.formula2.operator.pow.description",
                    defaultMessage: "Returns the result of a base number raised to an exponent power."
                },
                mod: {
                    id: "database.formula2.operator.mod.description",
                    defaultMessage: "Returns the first number modulo the second number."
                },
                equal: {
                    id: "database.formula2.operator.equal.description",
                    defaultMessage: "Returns true if both values are equal and false otherwise."
                },
                unequal: {
                    id: "database.formula2.operator.unequal.description",
                    defaultMessage: "Returns false if both values are equal and true otherwise."
                },
                concat: {
                    id: "database.formula2.function.concat.description",
                    defaultMessage: "Returns the concatenation of multiple lists."
                },
                join: {
                    id: "database.formula2.function.join.description",
                    defaultMessage: "Returns the values of the list with the joiner placed between each of the values."
                },
                split: {
                    id: "database.formula2.function.split.description",
                    defaultMessage: "Returns the list of values created by splitting a text by a separator."
                },
                substring: {
                    id: "database.formula2.function.slice.description",
                    defaultMessage: "Returns the substring of the text from the start index (inclusive) to the end index (optional and exclusive)."
                },
                length: {
                    id: "database.formula2.function.length.description",
                    defaultMessage: "Returns the length of the text or list value."
                },
                format: {
                    id: "database.formula2.function.format.description",
                    defaultMessage: "Returns the value formatted as text."
                },
                formatNumber: {
                    id: "database.formula2.function.formatNumber.description",
                    defaultMessage: "Returns the number value formatted as text.{br}{br}The format argument can be one of “commas” (the default), “percent”, “humanize”, “bytes_binary”, “bytes_decimal”, or a currency code (see below).{br}{br}Optionally specify how many decimal places to show (0-12) via the precision argument.{br}{br}Supported currency codes: “usd”, “aud”, “cad”, “sgd”, “eur”, “gbp”, “jpy”, “rub”, “inr”, “krw”, “cny”, “brl”, “try”, “idr”, “chf”, “hkd”, “nzd”, “sek”, “nok”, “mxn”, “zar”, “twd”, “dkk”, “pln”, “thb”, “huf”, “czk”, “ils”, “clp”, “php”, “aed”, “cop”, “sar”, “myr”, “ron”, “ars”, “uyu”, “pen”, “vnd”, “pkr”, “ngn”."
                },
                style: {
                    id: "database.formula2.function.style.description",
                    defaultMessage: "Adds styles and colors to the text. Valid formatting styles: “b” (bold), “u” (underline), “i” (italics), “c” (code), or “s” (strikethrough). Valid colors: “gray”, “brown”, “orange”, “yellow”, “green”, “blue”, “purple”, “pink”, and “red”. Add “_background” to colors to set background colors."
                },
                unstyle: {
                    id: "database.formula2.function.unstyle.description",
                    defaultMessage: "Removes formatting styles from the text. If no styles are specified, all styles are removed."
                },
                link: {
                    id: "database.formula2.function.link.description",
                    defaultMessage: "Creates a hyperlink from the label text and the URL."
                },
                toNumber: {
                    id: "database.formula2.function.toNumber.description",
                    defaultMessage: "Parses a number from text."
                },
                contains: {
                    id: "database.formula2.function.contains.description",
                    defaultMessage: "Returns true if the search string is present in the value."
                },
                replace: {
                    id: "database.formula2.function.replace.description",
                    defaultMessage: "Replaces the first match of the regular expression with the replacement value."
                },
                replaceAll: {
                    id: "database.formula2.function.replaceAll.description",
                    defaultMessage: "Replaces all matches of the regular expression with the replacement value."
                },
                test: {
                    id: "database.formula2.function.test.description",
                    defaultMessage: "Returns true if the value matches the regular expression and false otherwise."
                },
                match: {
                    id: "database.formula2.function.match.description",
                    defaultMessage: "Returns all matches of the regular expression as a list."
                },
                empty: {
                    id: "database.formula2.function.empty.description",
                    defaultMessage: "Returns true if the value you provide is empty. If you don’t provide an argument, it returns an empty value. Empty values include 0, ””, false, [], and blank properties."
                },
                abs: {
                    id: "database.formula2.function.abs.description",
                    defaultMessage: "Returns the absolute value of the number."
                },
                cbrt: {
                    id: "database.formula2.function.cbrt.description",
                    defaultMessage: "Returns the cube root of the number."
                },
                ceil: {
                    id: "database.formula2.function.ceil.description",
                    defaultMessage: "Returns the smallest integer greater than or equal to the number."
                },
                exp: {
                    id: "database.formula2.function.exp.description",
                    defaultMessage: "Returns e^x, where x is the argument, and e is Euler’s number (2.718…), the base of the natural logarithm."
                },
                floor: {
                    id: "database.formula2.function.floor.description",
                    defaultMessage: "Returns the largest integer less than or equal to the number."
                },
                ln: {
                    id: "database.formula2.function.ln.description",
                    defaultMessage: "Returns the natural logarithm of the number."
                },
                log10: {
                    id: "database.formula2.function.log10.description",
                    defaultMessage: "Returns the base 10 logarithm of the number."
                },
                log2: {
                    id: "database.formula2.function.log2.description",
                    defaultMessage: "Returns the base 2 logarithm of the number."
                },
                max: {
                    id: "database.formula2.function.max.description",
                    defaultMessage: "Returns the largest number of the arguments."
                },
                min: {
                    id: "database.formula2.function.min.description",
                    defaultMessage: "Returns the smallest number of the arguments."
                },
                mean: {
                    id: "database.formula2.function.mean.description",
                    defaultMessage: "Returns the arithmetic average of its arguments."
                },
                median: {
                    id: "database.formula2.function.median.description",
                    defaultMessage: "Returns the middle value of its arguments."
                },
                mode: {
                    id: "database.formula2.function.mode.description",
                    defaultMessage: "Returns the most commonly occurring value of its arguments."
                },
                round: {
                    id: "database.formula2.function.round.description",
                    defaultMessage: "Returns the value of a number rounded to the nearest integer."
                },
                sign: {
                    id: "database.formula2.function.sign.description",
                    defaultMessage: "Returns 1 if the number is positive, -1 if it is negative, and 0 if it is zero."
                },
                sqrt: {
                    id: "database.formula2.function.sqrt.description",
                    defaultMessage: "Returns the positive square root of the number."
                },
                start: {
                    id: "database.formula2.function.start.description",
                    defaultMessage: "Returns the start of the date range."
                },
                end: {
                    id: "database.formula2.function.end.description",
                    defaultMessage: "Returns the end of the date range."
                },
                now: {
                    id: "database.formula2.function.now.description",
                    defaultMessage: "Returns the current date and time."
                },
                today: {
                    id: "database.formula2.function.today.description",
                    defaultMessage: "Returns the current date without the time."
                },
                timestamp: {
                    id: "database.formula2.function.timestamp.description",
                    defaultMessage: "Returns the current Unix timestamp, representing the number of milliseconds that have elapsed since January 1, 1970."
                },
                fromTimestamp: {
                    id: "database.formula2.function.fromTimestamp.description",
                    defaultMessage: "Returns the date from the given Unix timestamp. The timestamp represents the number of milliseconds that have elapsed since January 1, 1970. Note: the returned date will not retain the seconds & milliseconds."
                },
                dateAdd: {
                    id: "database.formula2.function.dateAdd.description",
                    defaultMessage: "Adds time to the date. The unit argument can be one of: “years”, “quarters”, “months”, “weeks”, “days”, “hours”, or “minutes”."
                },
                dateSubtract: {
                    id: "database.formula2.function.dateSubtract.description",
                    defaultMessage: "Subtracts time from the date. The unit argument can be one of: “years”, “quarters”, “months”, “weeks”, “days”, “hours”, or “minutes”."
                },
                dateBetween: {
                    id: "database.formula2.function.dateBetween.description",
                    defaultMessage: "Returns the difference between two dates. The unit argument can be one of: “years”, “quarters”, “months”, “weeks”, “days”, “hours”, or “minutes”."
                },
                formatDate: {
                    id: "database.formula2.function.formatDate.description",
                    defaultMessage: "Formats the date using a custom format string and optional timezone. The format string can contain the following text to represent parts of the date: “YYYY” for year, “MM” for month, “DD” for day, “HH” for hour, “mm” for minute."
                },
                date: {
                    id: "database.formula2.function.date.description",
                    defaultMessage: "Returns the day of the month from the date (1-31)."
                },
                day: {
                    id: "database.formula2.function.day.description",
                    defaultMessage: "Returns the day of the week of the date, between 1 (Monday) and 7 (Sunday)."
                },
                month: {
                    id: "database.formula2.function.month.description",
                    defaultMessage: "Returns the month of the date (1-12)."
                },
                week: {
                    id: "database.formula2.function.week.description",
                    defaultMessage: "Returns the ISO week of the year of the date (1-53)."
                },
                year: {
                    id: "database.formula2.function.year.description",
                    defaultMessage: "Returns the year of the date."
                },
                hour: {
                    id: "database.formula2.function.hour.description",
                    defaultMessage: "Returns the hour of the date (0-23)."
                },
                minute: {
                    id: "database.formula2.function.minute.description",
                    defaultMessage: "Returns the minute of the date (0-59)."
                },
                parseDate: {
                    id: "database.formula2.function.parseDate.description",
                    defaultMessage: "Returns the date parsed according to the ISO 8601 standard."
                },
                dateRange: {
                    id: "database.formula2.function.dateRange.description",
                    defaultMessage: "Returns a date range constructed from the start and end dates."
                },
                dateStart: {
                    id: "database.formula2.function.dateStart.description",
                    defaultMessage: "Returns the start of the date range."
                },
                dateEnd: {
                    id: "database.formula2.function.dateEnd.description",
                    defaultMessage: "Returns the end of the date range."
                },
                id: {
                    id: "database.formula2.function.id.description",
                    defaultMessage: "Returns the id of the page or person. If no page or person is provided, returns the id of the page the formula is on."
                },
                name: {
                    id: "database.formula2.function.name.description",
                    defaultMessage: "Returns the name of a person."
                },
                email: {
                    id: "database.formula2.function.email.description",
                    defaultMessage: "Returns the email address of a person."
                },
                lower: {
                    id: "database.formula2.function.lower.description",
                    defaultMessage: "Converts the text to lowercase."
                },
                upper: {
                    id: "database.formula2.function.upper.description",
                    defaultMessage: "Converts the text to uppercase."
                },
                trim: {
                    id: "database.formula2.function.trim.description",
                    defaultMessage: "Removes whitespace from the beginning and end of the text."
                },
                repeat: {
                    id: "database.formula2.function.repeat.description",
                    defaultMessage: "Repeats the text a given number of times."
                },
                padStart: {
                    id: "database.formula2.function.padStart.description",
                    defaultMessage: "Returns the text padded with the provided padding string at the start until the target length is reached."
                },
                padEnd: {
                    id: "database.formula2.function.padEnd.description",
                    defaultMessage: "Returns the text padded with the provided padding string at the end until the target length is reached."
                },
                _wait: {
                    id: "database.formula2.function._wait.description",
                    defaultMessage: "Waits for the specified amount of time, then returns the result."
                },
                _unsafeCastArray: {
                    id: "database.formula2.function.unsafeCastArray.description",
                    defaultMessage: "Casts an array of unknown type to the type of the second array parameter"
                },
                count: {
                    id: "database.formula2.function.count.description",
                    defaultMessage: "Returns the number of elements in a list for which the condition is true. If no condition is provided, returns the total number of elements (equivalent to length())."
                }
            });

            function s(e) {
                if (!e) throw Error("Assertion failed in formulaLibraryFunctions")
            }
            let u = {
                    type: "undefined"
                },
                l = {
                    name: "expression",
                    type: {
                        type: "expression"
                    },
                    augmentScope: e => {
                        var t;
                        let n = (null == (t = e[0]) ? void 0 : t.type) === "array" ? e[0].of : {
                            type: "unknown"
                        };
                        return {
                            [r(416901).CURRENT_VALUE_NAME]: n,
                            [r(416901).CURRENT_INDEX_NAME]: {
                                type: "number"
                            }
                        }
                    }
                },
                p = {
                    expected: [{
                        name: "list",
                        type: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        }
                    }, l]
                },
                d = {
                    expected: [{
                        name: "list",
                        type: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        }
                    }, { ...l,
                        optional: !0
                    }]
                },
                y = {
                    if: {
                        name: "if",
                        * eval() {
                            throw new(r(194943)).V("if() should be compiled, not evaluated as a library function")
                        },
                        parameters: {
                            expected: [{
                                name: "condition",
                                type: {
                                    type: "checkbox"
                                }
                            }, {
                                name: "ifTrue",
                                type: {
                                    type: "expression"
                                }
                            }, {
                                name: "ifFalse",
                                type: {
                                    type: "expression"
                                }
                            }]
                        },
                        returnType: ([e, t, r]) => (0, a().qk)(t, r),
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: "if(true, 1, 2)",
                                output: "1"
                            }, {
                                input: "if(false, 1, 2)",
                                output: "2"
                            }, {
                                input: [(0, o().Py)("Checked"), [' == true ? "Complete" : "Incomplete"']]
                            }],
                            [{
                                input: "true.if(1, 2)",
                                output: "1"
                            }, {
                                input: "false.if(1, 2)",
                                output: "2"
                            }]
                        ],
                        syntax: ["if(condition, ifTrue, ifFalse)", "condition.if(ifTrue, ifFalse)"],
                        description: i.if
                    },
                    ifs: {
                        name: "ifs",
                        parameters: {
                            expected: [{
                                name: "condition",
                                type: {
                                    type: "checkbox"
                                }
                            }, {
                                name: "ifTrue",
                                type: {
                                    type: "expression"
                                }
                            }],
                            varargs: [{
                                name: "rest",
                                type: {
                                    type: "expression"
                                }
                            }]
                        },
                        returnType: e => {
                            if (e.length < 2) return {
                                type: "unknown"
                            };
                            let t = e[1],
                                r = 2;
                            for (; r < e.length - 1; r += 2)
                                if (!(0, a().Re)(e[r + 1], t)) return {
                                    type: "unknown"
                                };
                            if (r === e.length - 1) {
                                let n = e[r];
                                if (!(0, a().Re)(n, t)) return {
                                    type: "unknown"
                                }
                            }
                            return t
                        },
                        * eval() {
                            throw new(r(194943)).V("ifs() should be compiled, not evaluated as a library function")
                        },
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: "ifs(true, 1, true, 2, 3)",
                                output: "1"
                            }, {
                                input: "ifs(false, 1, false, 2, 3)",
                                output: "3"
                            }],
                            [{
                                input: "true.ifs(1, true, 2, 3)",
                                output: "1"
                            }, {
                                input: "false.ifs(1, false, 2, 3)",
                                output: "3"
                            }]
                        ],
                        syntax: ["ifs(condition, ifTrue, condition2, ifTrue2, ..., else)", "condition.ifs(ifTrue, condition2, ifTrue2, ..., else)"],
                        description: i.ifs
                    },
                    and: {
                        name: "and",
                        * eval(e, t) {
                            return {
                                type: "checkbox",
                                value: e.every(e => (0, a().CL)(e))
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "unknown"
                                }]
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: "and(true, true, true)",
                                output: "true"
                            }, {
                                input: "and(3 > 2, 2 < 3)",
                                output: "false"
                            }],
                            [{
                                input: "true.and(true, true)",
                                output: "true"
                            }, {
                                input: "(3 > 2).and(2 < 3)",
                                output: "false"
                            }]
                        ],
                        syntax: ["and(boolean, boolean, ...)", "boolean.and(boolean, ...)"],
                        description: r(649210).Q$.and
                    },
                    or: {
                        name: "or",
                        * eval(e, t) {
                            return {
                                type: "checkbox",
                                value: e.some(e => (0, a().CL)(e))
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "unknown"
                                }]
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: "or(true, false, false)",
                                output: "true"
                            }, {
                                input: "or(3 > 2, 2 < 3)",
                                output: "true"
                            }],
                            [{
                                input: "true.or(false, false)",
                                output: "true"
                            }, {
                                input: "(3 > 2).or(2 < 3)",
                                output: "true"
                            }]
                        ],
                        syntax: ["or(boolean, boolean, ...)", "boolean.or(boolean, ...)"],
                        description: r(649210).Q$.or
                    },
                    not: {
                        name: "not",
                        * eval(e, t) {
                            let [r] = e;
                            return {
                                type: "checkbox",
                                value: !(0, a().CL)(r)
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "unknown"
                                }]
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: "not(true)",
                                output: "false"
                            }, {
                                input: "not(2 > 3)",
                                output: "true"
                            }],
                            [{
                                input: "true.not()",
                                output: "false"
                            }, {
                                input: "(2 > 3).not()",
                                output: "true"
                            }]
                        ],
                        syntax: ["not(boolean)", "boolean.not()"],
                        description: r(649210).Q$.not
                    },
                    empty: {
                        name: "empty",
                        * eval(e, t) {
                            if (0 === e.length) return {
                                type: "undefined"
                            };
                            let [r] = e;
                            return {
                                type: "checkbox",
                                value: "array" === r.type ? 0 === r.values.length : !(0, a().CL)(r)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "unknown"
                                },
                                optional: !0
                            }]
                        },
                        returnType: e => 0 === e.length ? {
                            type: "undefined"
                        } : {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "unknown"
                        },
                        examples: [
                            [{
                                input: "empty()",
                                output: [
                                    ["empty", [
                                        ["i"]
                                    ]]
                                ]
                            }, {
                                input: "empty(0)",
                                output: "true"
                            }, {
                                input: "empty([])",
                                output: "true"
                            }],
                            [{
                                input: "0.empty()",
                                output: "true"
                            }, {
                                input: "[].empty()",
                                output: "true"
                            }]
                        ],
                        syntax: ["empty(value?)", "value.empty()"],
                        description: i.empty
                    },
                    length: {
                        name: "length",
                        * eval(e, t) {
                            let [n] = e;
                            return "array" === n.type ? {
                                type: "number",
                                value: n.values.length
                            } : (s("text" === n.type), {
                                type: "number",
                                value: n.value.reduce((e, t) => e + (0, r(247438).WWE)(t), 0)
                            })
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: [{
                                    type: "text"
                                }, {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }]
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'length("hello")',
                                output: "5"
                            }, {
                                input: "length([1, 2, 3])",
                                output: "3"
                            }],
                            [{
                                input: '"hello".length()',
                                output: "5"
                            }, {
                                input: "[1, 2, 3].length()",
                                output: "3"
                            }]
                        ],
                        syntax: ["length(value)", "value.length()"],
                        description: i.length
                    },
                    substring: {
                        name: "substring",
                        * eval(e, t) {
                            let [r, n, o] = e;
                            return s("text" === r.type && "number" === n.type), {
                                type: "text",
                                value: [
                                    [(yield*(0, a().o7)(r.value, t)).slice(n.value, (null == o ? void 0 : o.type) === "number" ? o.value : void 0)]
                                ]
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "target",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "startIndex",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "endIndex",
                                optional: !0,
                                type: {
                                    type: "number"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'substring("Notion", 0, 3)',
                                output: '"Not"'
                            }, {
                                input: 'substring("Notion", 3)',
                                output: '"ion"'
                            }],
                            [{
                                input: '"Notion".substring(0, 3)',
                                output: '"Not"'
                            }, {
                                input: '"Notion".substring(3)',
                                output: '"ion"'
                            }]
                        ],
                        syntax: ["substring(text, startIndex, endIndex?)", "text.substring(startIndex, endIndex?)"],
                        description: i.substring
                    },
                    contains: {
                        name: "contains",
                        * eval(e, t) {
                            let [r, n] = e;
                            s("text" === r.type && "text" === n.type);
                            let [o, i] = yield*(0, a().h8)([r.value, n.value], t);
                            return {
                                type: "checkbox",
                                value: o.includes(i)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "search",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'contains("Notion", "ot")',
                                output: "true"
                            }],
                            [{
                                input: '"Notion".contains("ot")',
                                output: "true"
                            }]
                        ],
                        syntax: ["contains(value, search)", "value.contains(search)"],
                        description: i.contains
                    },
                    test: {
                        name: "test",
                        * eval(e, t) {
                            let [r, n] = e;
                            s("text" === r.type && "text" === n.type);
                            let [o, i] = yield*(0, a().h8)([n.value, r.value], t);
                            return {
                                type: "checkbox",
                                value: g({
                                    context: t,
                                    pattern: o
                                }).test(i)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "pattern",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: 'test("Notion", "Not")',
                                output: "true"
                            }, {
                                input: 'test("Notion", "\\d")',
                                output: "false"
                            }],
                            [{
                                input: '"Notion.test("Not")',
                                output: "true"
                            }, {
                                input: '"Notion".test("\\d")',
                                output: "false"
                            }]
                        ],
                        syntax: ["test(text, pattern)", "text.test(pattern)"],
                        description: i.test
                    },
                    match: {
                        name: "match",
                        * eval(e, t) {
                            let [n, o] = e;
                            s("text" === n.type && "text" === o.type);
                            let [i, u] = yield*(0, a().h8)([n.value, o.value], t), l = g({
                                context: t,
                                pattern: u,
                                flags: "g"
                            }), p = i.match(l);
                            return p ? {
                                type: "array",
                                values: p.map(e => ({
                                    type: "text",
                                    value: (0, r(247438).x9d)(e)
                                }))
                            } : {
                                type: "array",
                                values: []
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "pattern",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "array",
                            of: {
                                type: "text"
                            }
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'match("Notion Notion", "Not")',
                                output: '["Not", "Not"]'
                            }, {
                                input: 'match("Notion 123 Notion 456", "\\d+")',
                                output: '["123", "456"]'
                            }],
                            [{
                                input: '"Notion Notion".match("Not")',
                                output: '["Not", "Not"]'
                            }, {
                                input: '"Notion 123 Notion 456".match("\\d+")',
                                output: '["123", "456"]'
                            }]
                        ],
                        syntax: ["match(text, pattern)", "text.match(pattern)"],
                        description: i.match
                    },
                    replace: {
                        name: "replace",
                        * eval(e, t) {
                            let [n, o, i] = e;
                            s("text" === n.type && "text" === o.type);
                            let [u, l, p] = yield*(0, a().h8)([n.value, o.value, (null == i ? void 0 : i.type) === "text" ? i.value : void 0], t), d = g({
                                context: t,
                                pattern: l
                            });
                            return {
                                type: "text",
                                value: (0, r(247438).x9d)(u.replace(d, p))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "pattern",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "replacement",
                                optional: !0,
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'replace("Notion Notion", "N", "M")',
                                output: '"Motion Notion"'
                            }],
                            [{
                                input: '"Notion Notion".replace("N", "M")',
                                output: '"Motion Notion"'
                            }]
                        ],
                        syntax: ["replace(text, pattern, replacement?)", "text.replace(pattern, replacement?)"],
                        description: i.replace
                    },
                    replaceAll: {
                        name: "replaceAll",
                        * eval(e, t) {
                            let [n, o, i] = e;
                            s("text" === n.type && "text" === o.type);
                            let [u, l, p] = yield*(0, a().h8)([n.value, o.value, (null == i ? void 0 : i.type) === "text" ? i.value : void 0], t), d = g({
                                context: t,
                                pattern: l,
                                flags: "g"
                            });
                            return {
                                type: "text",
                                value: (0, r(247438).x9d)(u.replace(d, p))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "pattern",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "replacement",
                                optional: !0,
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'replaceAll("Notion Notion", "N", "M")',
                                output: '"Motion Motion"'
                            }, {
                                input: 'replaceAll("Notion 123", "\\d", "")',
                                output: '"Notion"'
                            }],
                            [{
                                input: '"Notion Notion".replaceAll("N", "M")',
                                output: '"Motion Motion"'
                            }, {
                                input: '"Notion 123".replaceAll("\\d", "")',
                                output: '"Notion"'
                            }]
                        ],
                        syntax: ["replaceAll(text, pattern, replacement?)", "text.replaceAll(pattern, replacement?)"],
                        description: i.replaceAll
                    },
                    lower: {
                        name: "lower",
                        * eval(e) {
                            let [t] = e;
                            return s("text" === t.type), {
                                type: "text",
                                value: t.value.map(e => {
                                    let t = (0, r(247438).uPN)(e),
                                        n = (0, r(247438).N8A)(e);
                                    return (0, r(247438).Ey_)(n.toLowerCase(), t)
                                })
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "text",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'lower("NOTION")',
                                output: '"notion"'
                            }],
                            [{
                                input: '"NOTION".lower()',
                                output: '"notion"'
                            }]
                        ],
                        syntax: ["lower(text)", "text.lower()"],
                        description: i.lower
                    },
                    upper: {
                        name: "upper",
                        * eval(e) {
                            let [t] = e;
                            return s("text" === t.type), {
                                type: "text",
                                value: t.value.map(e => {
                                    let t = (0, r(247438).uPN)(e),
                                        n = (0, r(247438).N8A)(e);
                                    return (0, r(247438).Ey_)(n.toUpperCase(), t)
                                })
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "text",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'upper("notion")',
                                output: '"NOTION"'
                            }],
                            [{
                                input: '"notion".upper()',
                                output: '"NOTION"'
                            }]
                        ],
                        syntax: ["upper(text)", "text.upper()"],
                        description: i.upper
                    },
                    trim: {
                        name: "trim",
                        * eval(e) {
                            let [t] = e;
                            return s("text" === t.type), {
                                type: "text",
                                value: (0, r(247438).bBR)(t.value)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "text",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'trim("  notion  ")',
                                output: '"notion"'
                            }],
                            [{
                                input: '"  notion  ".trim()',
                                output: '"notion"'
                            }]
                        ],
                        syntax: ["trim(text)", "text.trim()"],
                        description: i.trim
                    },
                    repeat: {
                        name: "repeat",
                        * eval(e) {
                            let [t, r] = e;
                            s("text" === t.type), s("number" === r.type);
                            let n = [],
                                a = Math.min(r.value, 1e4);
                            for (let e = 0; e < a; e++) n.push(...t.value);
                            return {
                                type: "text",
                                value: n
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "text",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "count",
                                type: {
                                    type: "number"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'repeat("0", 4)',
                                output: '"0000"'
                            }, {
                                input: 'repeat("~=", 10).style("blue")',
                                output: [
                                    ['"'],
                                    ["~=~=~=~=~=~=~=~=~=~=", [
                                        ["h", "blue"]
                                    ]],
                                    ['"']
                                ]
                            }],
                            [{
                                input: '"0".repeat(4)',
                                output: '"0000"'
                            }, {
                                input: '"~=".repeat(10).style("blue")',
                                output: [
                                    ['"'],
                                    ["~=~=~=~=~=~=~=~=~=~=", [
                                        ["h", "blue"]
                                    ]],
                                    ['"']
                                ]
                            }]
                        ],
                        syntax: ["repeat(text, count)", "text.repeat(count)"],
                        description: i.repeat
                    },
                    padStart: {
                        name: "padStart",
                        * eval(e, t) {
                            let [r, n, a] = e;
                            return s("text" === r.type && "number" === n.type && "text" === a.type), yield*(0, o().tr)(r.value, n.value, a.value, "start", t)
                        },
                        parameters: {
                            expected: [{
                                name: "text",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "targetLength",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "padString",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'padStart("A", 3, ".")',
                                output: '"..A"'
                            }, {
                                input: "padStart(123, 5, 0)",
                                output: '"00123"'
                            }],
                            [{
                                input: '"A".padStart(3, ".")',
                                output: '"..A"'
                            }, {
                                input: "123.padStart(5, 0)",
                                output: '"00123"'
                            }]
                        ],
                        syntax: ["padStart(text, targetLength, padString)", "text.padStart(targetLength, padString)"],
                        description: i.padStart
                    },
                    padEnd: {
                        name: "padEnd",
                        * eval(e, t) {
                            let [r, n, a] = e;
                            return s("text" === r.type && "number" === n.type && (null == a ? void 0 : a.type) === "text"), yield*(0, o().tr)(r.value, n.value, a.value, "end", t)
                        },
                        parameters: {
                            expected: [{
                                name: "text",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "targetLength",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "padString",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'padEnd("A", 3, ".")',
                                output: '"A.."'
                            }, {
                                input: "padEnd(123, 5, 0)",
                                output: '"12300"'
                            }],
                            [{
                                input: '"A".padEnd(3, ".")',
                                output: '"A.."'
                            }, {
                                input: "123.padEnd(5, 0)",
                                output: '"12300"'
                            }]
                        ],
                        syntax: ["padEnd(text, targetLength, padString)", "text.padEnd(targetLength, padString)"],
                        description: i.padEnd
                    },
                    link: {
                        name: "link",
                        * eval(e) {
                            let [t, n] = e;
                            return s("text" === t.type), s("text" === n.type), {
                                type: "text",
                                value: (0, r(247438).lux)(t.value, (0, r(247438).k4p)(n.value))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "url",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'link("Notion", "https://notion.so")',
                                output: [
                                    ['"'],
                                    ["Notion", [(0, r(247438).Sez)("https://notion.so")]],
                                    ['"']
                                ]
                            }],
                            [{
                                input: '"Notion".link("https://notion.so")',
                                output: [
                                    ['"'],
                                    ["Notion", [(0, r(247438).Sez)("https://notion.so")]],
                                    ['"']
                                ]
                            }]
                        ],
                        syntax: ["link(text, url)", "text.link(url)"],
                        description: i.link
                    },
                    style: {
                        name: "style",
                        * eval(e) {
                            let [t, ...n] = e;
                            s("text" === t.type), n.forEach(e => s("text" === e.type));
                            let a = n.length > 0 ? (0, o().kk)(n.map(e => (s("text" === e.type), e.value)).filter(r(722371).O9)) : [];
                            return {
                                type: "text",
                                value: (0, o().xK)(t.value, a)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }],
                            varargs: [{
                                name: "styles",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'style("Notion", "b", "u")',
                                output: [
                                    ['"'],
                                    ["Notion", [
                                        ["b"],
                                        ["_"]
                                    ]],
                                    ['"']
                                ]
                            }, {
                                input: 'style("Notion", "blue", "gray_background")',
                                output: [
                                    ['"'],
                                    ["Notion", [
                                        ["h", "blue"],
                                        ["h", "blue_background"]
                                    ]],
                                    ['"']
                                ]
                            }],
                            [{
                                input: '"Notion".style("b", "u")',
                                output: [
                                    ['"'],
                                    ["Notion", [
                                        ["b"],
                                        ["_"]
                                    ]],
                                    ['"']
                                ]
                            }, {
                                input: '"Notion".style("blue", "blue_background")',
                                output: [
                                    ['"'],
                                    ["Notion", [
                                        ["h", "blue"],
                                        ["h", "blue_background"]
                                    ]],
                                    ['"']
                                ]
                            }]
                        ],
                        syntax: ["style(value, styles)", "value.style(styles)"],
                        description: i.style
                    },
                    unstyle: {
                        name: "unstyle",
                        * eval(e) {
                            let [t, ...n] = e;
                            s("text" === t.type);
                            let a = n.length > 0 ? (0, o().kk)(n.map(e => (s("text" === e.type), e.value)).filter(r(722371).O9)) : void 0;
                            return {
                                type: "text",
                                value: (0, o().qs)(t.value, a)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }],
                            varargs: [{
                                name: "styles",
                                optional: !0,
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: [
                                    ['unstyle("'],
                                    ["Text", [
                                        ["b"],
                                        ["c"]
                                    ]],
                                    ['")']
                                ],
                                output: [
                                    ['"Text"']
                                ]
                            }, {
                                input: [
                                    ['unstyle("'],
                                    ["Text", [
                                        ["h", "blue"],
                                        ["b"]
                                    ]],
                                    ['", "blue")']
                                ],
                                output: [
                                    ['"'],
                                    ["Text", [
                                        ["b"]
                                    ]],
                                    ['"']
                                ]
                            }],
                            [{
                                input: [
                                    ['"'],
                                    ["Text", [
                                        ["b"],
                                        ["c"]
                                    ]],
                                    ['".unstyle()']
                                ],
                                output: [
                                    ['"Text"']
                                ]
                            }, {
                                input: [
                                    ['"'],
                                    ["Text", [
                                        ["h", "blue"],
                                        ["b"]
                                    ]],
                                    ['".unstyle("blue")']
                                ],
                                output: [
                                    ['"'],
                                    ["Text", [
                                        ["b"]
                                    ]],
                                    ['"']
                                ]
                            }]
                        ],
                        syntax: ["unstyle(value, styles?)", "value.unstyle(styles?)"],
                        description: i.unstyle
                    },
                    format: {
                        name: "format",
                        * eval(e, t) {
                            let [n] = e, o = (0, a().Ht)(n);
                            return {
                                type: "text",
                                value: (0, r(247438).x9d)((yield*(0, a().o7)(o, t)))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "unknown"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: "format(1234)",
                                output: '"1234"'
                            }, {
                                input: "format(now())",
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().toFormat("LLLL d, y HH:mm")],
                                    ['"']
                                ]
                            }],
                            [{
                                input: "1234.format()",
                                output: '"1234"'
                            }, {
                                input: "now().format()",
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().toFormat("LLLL d, y HH:mm")],
                                    ['"']
                                ]
                            }]
                        ],
                        syntax: ["format(value)", "value.format()"],
                        description: i.format
                    },
                    formatNumber: {
                        name: "formatNumber",
                        * eval(e, t) {
                            let [n, a, i] = e;
                            s("number" === n.type), s(void 0 === a || (null == a ? void 0 : a.type) === "text");
                            let u = void 0 === a ? "number_with_commas" : yield*(0, o().x3)(a.value, t);
                            s(void 0 === i || (null == i ? void 0 : i.type) === "number");
                            let l = (0, r(700369).ZV)(n.value, u, t.intl, void 0, null == i ? void 0 : i.value);
                            return {
                                type: "text",
                                value: (0, r(247438).x9d)(l)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "format",
                                type: {
                                    type: "text"
                                },
                                optional: !0
                            }, {
                                name: "precision",
                                type: {
                                    type: "number"
                                },
                                optional: !0
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'formatNumber(12.345, "usd")',
                                output: '"$12.35"'
                            }, {
                                input: 'formatNumber(12.345, "usd", 0)',
                                output: '"$12"'
                            }, {
                                input: 'formatNumber(1234567890, "commas")',
                                output: '"1,234,567,890"'
                            }, {
                                input: 'formatNumber(1234567890, "humanize")',
                                output: '"1.2B"'
                            }],
                            [{
                                input: '12.345.formatNumber("usd")',
                                output: '"$12.35"'
                            }, {
                                input: '12.345.formatNumber("usd", 0)',
                                output: '"$12"'
                            }, {
                                input: '1234567890.formatNumber("commas")',
                                output: '"1,234,567,890"'
                            }, {
                                input: '1234567890.formatNumber("humanize")',
                                output: '"1.2B"'
                            }]
                        ],
                        syntax: ["formatNumber(value, format?, precision?)", "value.formatNumber(format?, precision?)"],
                        description: i.formatNumber
                    },
                    add: (0, o().P7)("add", i.add, (e, t) => Number.isInteger(e) && Number.isInteger(t) ? e + t : new(r(598629)).Big(e).plus(t).toNumber(), "+"),
                    subtract: (0, o().P7)("subtract", i.subtract, (e, t) => Number.isInteger(e) && Number.isInteger(t) ? e - t : new(r(598629)).Big(e).minus(t).toNumber(), "-"),
                    multiply: (0, o().P7)("multiply", i.multiply, (e, t) => Number.isInteger(e) && Number.isInteger(t) ? e * t : new(r(598629)).Big(e).mul(t).toNumber(), "*"),
                    mod: (0, o().P7)("mod", i.mod, (e, t) => Number.isInteger(t) ? e % t : new(r(598629)).Big(e).mod(t).toNumber(), "%"),
                    pow: (0, o().P7)("pow", i.pow, (e, t) => !Number.isInteger(e) && Number.isInteger(t) ? new(r(598629)).Big(e).pow(t).toNumber() : e ** t, "^"),
                    divide: {
                        name: "divide",
                        description: i.divide,
                        * eval(e, t) {
                            let [n, a] = e;
                            return (s("number" === n.type && "number" === a.type), 0 === a.value) ? u : {
                                type: "number",
                                value: new(r(598629)).Big(n.value).div(a.value).toNumber()
                            }
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        syntax: ["divide(number, number)", "number.divide(number)"],
                        parameters: {
                            expected: [{
                                name: "lhs",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "rhs",
                                type: {
                                    type: "number"
                                }
                            }]
                        },
                        examples: [
                            [{
                                input: "divide(5, 10)",
                                output: "0.5"
                            }, {
                                input: "5 / 10",
                                output: "0.5"
                            }],
                            [{
                                input: "5.divide(10)",
                                output: "0.5"
                            }, {
                                input: "5 / 10",
                                output: "0.5"
                            }]
                        ]
                    },
                    min: {
                        name: "min",
                        * eval(e, t) {
                            let n = (0, a().U)({
                                type: "array",
                                values: e
                            });
                            if (0 === n.values.length) return u;
                            if (n.values.every(e => "date" === e.type)) {
                                let e = n.values.map(e => {
                                    if ("date" === e.type) return (0, r(25825).ln)(e.value, t.userTimeZone)
                                }).filter(r(722371).O9);
                                if (0 === e.length) return u;
                                let a = e.indexOf(Math.min(...e));
                                return n.values[a]
                            } {
                                let e = n.values.map(e => "number" === e.type ? e.value : void 0).filter(r(722371).O9);
                                return 0 === e.length ? u : {
                                    type: "number",
                                    value: Math.min(...e)
                                }
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "number"
                                }, {
                                    type: "array",
                                    of: {
                                        type: "number"
                                    }
                                }]
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: "min(1, 2, 3)",
                                output: "1"
                            }, {
                                input: "min([1, 2, 3])",
                                output: "1"
                            }],
                            [{
                                input: "[1, 2, 3].min()",
                                output: "1"
                            }]
                        ],
                        syntax: ["min(list)", "list.min()"],
                        description: i.min
                    },
                    max: {
                        name: "max",
                        * eval(e, t) {
                            let n = (0, a().U)({
                                type: "array",
                                values: e
                            });
                            if (0 === n.values.length) return u;
                            if (n.values.every(e => "date" === e.type)) {
                                let e = n.values.map(e => {
                                    if ("date" === e.type) return (0, r(25825).ln)(e.value, t.userTimeZone)
                                }).filter(r(722371).O9);
                                if (0 === e.length) return u;
                                let a = e.indexOf(Math.max(...e));
                                return n.values[a]
                            } {
                                let e = n.values.map(e => "number" === e.type ? e.value : void 0).filter(r(722371).O9);
                                return 0 === e.length ? u : {
                                    type: "number",
                                    value: Math.max(...e)
                                }
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "number"
                                }, {
                                    type: "array",
                                    of: {
                                        type: "number"
                                    }
                                }]
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: "max(1, 2, 3)",
                                output: "3"
                            }, {
                                input: "max([1, 2, 3])",
                                output: "3"
                            }],
                            [{
                                input: "[1, 2, 3].max()",
                                output: "3"
                            }]
                        ],
                        syntax: ["max(list)", "list.max()"],
                        description: i.max
                    },
                    sum: {
                        name: "sum",
                        * eval(e, t) {
                            return {
                                type: "number",
                                value: (0, o().Hx)(e).reduce((e, t) => e.plus(t), new(r(598629)).Big(0)).toNumber()
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "number"
                                }, {
                                    type: "array",
                                    of: {
                                        type: "number"
                                    }
                                }]
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: "sum(1, 2, 3)",
                                output: "6"
                            }, {
                                input: "sum([1, 2, 3], 4, 5)",
                                output: "15"
                            }],
                            [{
                                input: "[1, 2, 3].sum()",
                                output: "6"
                            }, {
                                input: "[1, 2, 3].sum(4, 5)",
                                output: "15"
                            }]
                        ],
                        syntax: ["sum(list)", "list.sum()"],
                        description: i.sum
                    },
                    median: {
                        name: "median",
                        * eval(e, t) {
                            let n = (0, o().Hx)(e).sort((e, t) => e - t);
                            if (0 === n.length) return u;
                            if (n.length % 2 != 0) return {
                                type: "number",
                                value: n[Math.floor(n.length / 2)]
                            }; {
                                let e = n[n.length / 2 - 1],
                                    t = n[n.length / 2];
                                return {
                                    type: "number",
                                    value: new(r(598629)).Big(e).plus(t).div(2).toNumber()
                                }
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "number"
                                }, {
                                    type: "array",
                                    of: {
                                        type: "number"
                                    }
                                }]
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: "median(1, 2, 4)",
                                output: "2"
                            }, {
                                input: "median([1, 2, 3], 4)",
                                output: "2.5"
                            }],
                            [{
                                input: "[1, 2, 4].median()",
                                output: "2"
                            }, {
                                input: "[1, 2, 3].median(4)",
                                output: "2.5"
                            }]
                        ],
                        syntax: ["median(list)", "list.median()"],
                        description: i.median
                    },
                    mean: {
                        name: "mean",
                        * eval(e, t) {
                            let n = (0, o().Hx)(e);
                            return 0 === n.length ? u : {
                                type: "number",
                                value: n.reduce((e, t) => e.plus(t), new(r(598629)).Big(0)).div(n.length).toNumber()
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: [{
                                    type: "number"
                                }, {
                                    type: "array",
                                    of: {
                                        type: "number"
                                    }
                                }]
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: "mean(1, 2, 3)",
                                output: "2"
                            }, {
                                input: "mean([1, 2, 3], 4, 5)",
                                output: "3"
                            }],
                            [{
                                input: "[1, 2, 3].mean()",
                                output: "2"
                            }, {
                                input: "[1, 2, 3].mean(4, 5)",
                                output: "3"
                            }]
                        ],
                        syntax: ["mean(list)", "list.mean()"],
                        description: i.mean
                    },
                    abs: (0, o().hq)("abs", i.abs, Math.abs, [10, -10]),
                    round: {
                        name: "round",
                        * eval(e, t) {
                            let [n, a] = e;
                            if (s("number" === n.type), void 0 === a || (s("number" === a.type), 0 === a.value)) return {
                                type: "number",
                                value: Math.round(n.value)
                            };
                            if (!Number.isInteger(a.value)) throw new(r(944897)).x4({
                                type: r(944897).v3.CannotRoundToNonInteger,
                                precision: a.value
                            });
                            if (Math.abs(a.value) > 12) throw new(r(944897)).x4({
                                type: r(944897).v3.CannotRoundToTooManyDecimalPlaces,
                                precision: a.value
                            });
                            let o = Math.pow(10, a.value);
                            return {
                                type: "number",
                                value: Math.round(n.value * o) / o
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "value",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "precision",
                                type: {
                                    type: "number"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: "round(1.2345)",
                                output: "1"
                            }],
                            [{
                                input: "round(1.2345, 2)",
                                output: "1.23"
                            }]
                        ],
                        syntax: ["round(value, precision)", "value.round(precision)"],
                        description: i.round
                    },
                    ceil: (0, o().hq)("ceil", i.ceil, Math.ceil, [.4, -.6]),
                    floor: (0, o().hq)("floor", i.floor, Math.floor, [.4, -.6]),
                    sqrt: (0, o().hq)("sqrt", i.sqrt, Math.sqrt, [4, 7]),
                    cbrt: (0, o().hq)("cbrt", i.cbrt, Math.cbrt, [9, 64]),
                    exp: (0, o().hq)("exp", i.exp, Math.exp, [1, -1]),
                    ln: (0, o().hq)("ln", i.ln, Math.log, [Math.E, 10]),
                    log10: (0, o().hq)("log10", i.log10, Math.log10, [10, 1e5]),
                    log2: (0, o().hq)("log2", i.log2, Math.log2, [4, 1024]),
                    sign: (0, o().hq)("sign", i.sign, Math.sign, [-10, 10]),
                    pi: (0, o().SU)("pi", i.pi, Math.PI),
                    e: (0, o().SU)("e", i.e, Math.E),
                    toNumber: {
                        name: "toNumber",
                        * eval(e, t) {
                            let [n] = e;
                            switch (n.type) {
                                case "number":
                                    return n;
                                case "checkbox":
                                    return {
                                        type: "number",
                                        value: +!!n.value
                                    };
                                case "text":
                                    {
                                        let e = yield*(0, a().o7)(n.value, t), o = /^0[xbo]/.test(e) ? Number(e) : parseFloat(e);
                                        return (0, r(627179).Et)(o) ? {
                                            type: "number",
                                            value: o
                                        } : u
                                    }
                                case "date":
                                    return {
                                        type: "number",
                                        value: (0, r(25825).AA)(n.value, t.userTimeZone).start.valueOf()
                                    };
                                case "array":
                                    throw new(r(944897)).x4({
                                        type: r(944897).v3.CannotUseToNumberOnList
                                    });
                                default:
                                    return u
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "unknown"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: 'toNumber("2")',
                                output: "2"
                            }, {
                                input: "toNumber(now())",
                                output: (0, r(25825).ln)((0, r(25825).T_)((0, r(714350).P)()), (0, r(714350).P)()).toString()
                            }, {
                                input: "toNumber(true)",
                                output: "1"
                            }],
                            [{
                                input: '"2".toNumber()',
                                output: "2"
                            }, {
                                input: "now().toNumber()",
                                output: (0, r(25825).ln)((0, r(25825).T_)((0, r(714350).P)()), (0, r(714350).P)()).toString()
                            }, {
                                input: "true.toNumber()",
                                output: "1"
                            }]
                        ],
                        syntax: ["toNumber(value)", "value.toNumber()"],
                        description: i.toNumber
                    },
                    now: {
                        name: "now",
                        * eval(e, t) {
                            return {
                                type: "date",
                                value: (0, r(25825).T_)(t.userTimeZone)
                            }
                        },
                        parameters: {},
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: "now()",
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(25825).T_)((0, r(714350).P)())))]
                            }]
                        ],
                        syntax: ["now()"],
                        description: i.now
                    },
                    today: {
                        name: "today",
                        * eval(e, t) {
                            return {
                                type: "date",
                                value: (0, r(25825).lN)((0, r(25825).ah)(t.userTimeZone))
                            }
                        },
                        parameters: {},
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: "today()",
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(25825).lN)((0, r(25825).ah)((0, r(714350).P)()))))]
                            }]
                        ],
                        syntax: ["today()"],
                        description: i.today
                    },
                    minute: {
                        name: "minute",
                        eval: (0, o().KN)(e => e.minute),
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'minute(parseDate("2023-07-10T17:35Z"))',
                                output: "35"
                            }],
                            [{
                                input: 'parseDate("2023-07-10T17:35Z").minute()',
                                output: "35"
                            }]
                        ],
                        syntax: ["minute(date)", "date.minute()"],
                        description: i.minute
                    },
                    hour: {
                        name: "hour",
                        eval: (0, o().KN)(e => e.hour),
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'hour(parseDate("2023-07-10T17:35Z"))',
                                output: "17"
                            }],
                            [{
                                input: 'parseDate("2023-07-10T17:35Z").hour()',
                                output: "17"
                            }]
                        ],
                        syntax: ["hour(date)", "date.hour()"],
                        description: i.hour
                    },
                    day: {
                        name: "day",
                        eval: (0, o().KN)(e => e.weekday),
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'day(parseDate("2023-07-10T17:35Z"))',
                                output: "1"
                            }],
                            [{
                                input: 'parseDate("2023-07-10T17:35Z").day()',
                                output: "1"
                            }]
                        ],
                        syntax: ["day(date)", "date.day()"],
                        description: i.day
                    },
                    date: {
                        name: "date",
                        eval: (0, o().KN)(e => e.day),
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'date(parseDate("2023-07-10T17:35Z"))',
                                output: "10"
                            }],
                            [{
                                input: 'parseDate("2023-07-10T17:35Z").date()',
                                output: "10"
                            }]
                        ],
                        syntax: ["date(date)", "date.date()"],
                        description: i.date
                    },
                    week: {
                        name: "week",
                        eval: (0, o().KN)(e => e.weekNumber),
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'week(parseDate("2023-01-02"))',
                                output: "1"
                            }],
                            [{
                                input: 'parseDate("2023-01-02").week()',
                                output: "1"
                            }]
                        ],
                        syntax: ["week(date)", "date.week()"],
                        description: i.week
                    },
                    month: {
                        name: "month",
                        eval: (0, o().KN)(e => e.month),
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'month(parseDate("2023-07-10T17:35Z"))',
                                output: "7"
                            }],
                            [{
                                input: 'parseDate("2023-07-10T17:35Z").month()',
                                output: "7"
                            }]
                        ],
                        syntax: ["month(date)", "date.month()"],
                        description: i.month
                    },
                    year: {
                        name: "year",
                        eval: (0, o().KN)(e => e.year),
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: "year(now())",
                                output: r(906745).DateTime.now().year.toString()
                            }],
                            [{
                                input: "now().year()",
                                output: r(906745).DateTime.now().year.toString()
                            }]
                        ],
                        syntax: ["year(date)", "date.year()"],
                        description: i.year
                    },
                    dateAdd: {
                        name: "dateAdd",
                        eval: (0, o().R)((e, t, r) => e.plus({
                            [r]: t
                        }).valueOf(), "dateAdd"),
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "date"
                                }
                            }, {
                                name: "num",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "unit",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'dateAdd(now(), 1, "days")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().plus({
                                    days: 1
                                }))))]
                            }, {
                                input: 'dateAdd(now(), 2, "months")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().plus({
                                    months: 2
                                }))))]
                            }, {
                                input: 'dateAdd(now(), 3, "years")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().plus({
                                    years: 3
                                }))))]
                            }],
                            [{
                                input: 'now().dateAdd(1, "days")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().plus({
                                    days: 1
                                }))))]
                            }, {
                                input: 'now().dateAdd(2, "months")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().minus({
                                    months: 2
                                }))))]
                            }, {
                                input: 'now().dateAdd(3, "years")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().plus({
                                    years: 3
                                }))))]
                            }]
                        ],
                        syntax: ["dateAdd(date, num, unit)", "date.dateAdd(num, unit)"],
                        description: i.dateAdd
                    },
                    dateSubtract: {
                        name: "dateSubtract",
                        eval: (0, o().R)((e, t, r) => e.minus({
                            [r]: t
                        }).valueOf(), "dateSubtract"),
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "date"
                                }
                            }, {
                                name: "num",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "unit",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'dateSubtract(now(), 1, "days")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().minus({
                                    days: 1
                                }))))]
                            }, {
                                input: 'dateSubtract(now(), 2, "months")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().minus({
                                    months: 2
                                }))))]
                            }, {
                                input: 'dateSubtract(now(), 3, "years")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().minus({
                                    years: 3
                                }))))]
                            }],
                            [{
                                input: 'now().dateSubtract(1, "days")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().minus({
                                    days: 1
                                }))))]
                            }, {
                                input: 'now().dateSubtract(2, "months")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().minus({
                                    months: 2
                                }))))]
                            }, {
                                input: 'now().dateSubtract(3, "years")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.now().minus({
                                    years: 3
                                }))))]
                            }]
                        ],
                        syntax: ["dateSubtract(date, num, unit)", "date.dateSubtract(num, unit)"],
                        description: i.dateSubtract
                    },
                    dateBetween: {
                        name: "dateBetween",
                        * eval(e, t) {
                            let [n, a, i] = e;
                            s("date" === n.type && "date" === a.type && "text" === i.type);
                            let u = (0, r(25825).AA)(n.value, t.userTimeZone).start,
                                l = (0, r(25825).AA)(a.value, t.userTimeZone).start,
                                p = yield*(0, o().Fd)(i.value, t, "dateBetween");
                            return {
                                type: "number",
                                value: Math.trunc(u.diff(l, p).get(p))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "left",
                                type: {
                                    type: "date"
                                }
                            }, {
                                name: "right",
                                type: {
                                    type: "date"
                                }
                            }, {
                                name: "unit",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'dateBetween(now(), parseDate("2022-09-07"), "days")',
                                output: Math.trunc(r(906745).DateTime.now().diff(r(906745).DateTime.fromISO("2022-09-07"), "days").days).toString()
                            }, {
                                input: 'dateBetween(parseDate("2030-01-01"), now(), "years")',
                                output: Math.trunc(r(906745).DateTime.fromISO("2030-01-01").diffNow("years").years).toString()
                            }],
                            [{
                                input: 'now().dateBetween(parseDate("2022-09-07"), "days")',
                                output: Math.trunc(r(906745).DateTime.now().diff(r(906745).DateTime.fromISO("2022-09-07"), "days").days).toString()
                            }, {
                                input: 'parseDate("2030-01-01").dateBetween(now(), "years")',
                                output: Math.trunc(r(906745).DateTime.fromISO("2030-01-01").diffNow("years").years).toString()
                            }]
                        ],
                        syntax: ["dateBetween(date, date, unit)", "date.dateBetween(date, unit)"],
                        description: i.dateBetween
                    },
                    dateRange: {
                        name: "dateRange",
                        * eval(e, t) {
                            let [r, n] = e;
                            return (s("date" === r.type && "date" === n.type), "start_time" in r.value || "start_time" in n.value) ? {
                                type: "date",
                                value: {
                                    type: "datetimerange",
                                    start_date: r.value.start_date,
                                    start_time: "start_time" in r.value ? r.value.start_time : "00:00",
                                    end_date: "end_date" in n.value ? n.value.end_date : n.value.start_date,
                                    end_time: "end_time" in n.value ? n.value.end_time : "start_time" in n.value ? n.value.start_time : "23:59",
                                    time_zone: "time_zone" in r.value && r.value.time_zone || "time_zone" in n.value && n.value.time_zone || t.userTimeZone
                                }
                            } : {
                                type: "date",
                                value: {
                                    type: "daterange",
                                    start_date: r.value.start_date,
                                    end_date: "end_date" in n.value ? n.value.end_date : n.value.start_date
                                }
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "start",
                                type: {
                                    type: "date"
                                }
                            }, {
                                name: "end",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: [
                                    ["dateRange("], (0, o().Py)("Start Date"), [", "], (0, o().Py)("End Date"), [")"]
                                ],
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)({
                                    type: "daterange",
                                    start_date: "2022-09-07",
                                    end_date: "2023-09-07"
                                }))]
                            }],
                            [{
                                input: [(0, o().Py)("Start Date"), [".dateRange("], (0, o().Py)("End Date"), [")"]],
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)({
                                    type: "daterange",
                                    start_date: "2022-09-07",
                                    end_date: "2023-09-07"
                                }))]
                            }]
                        ],
                        syntax: ["dateRange(start, end)"],
                        description: i.dateRange
                    },
                    dateStart: {
                        name: "dateStart",
                        * eval(e, t) {
                            let [n] = e;
                            return s("date" === n.type), {
                                type: "date",
                                value: (0, r(943003).j1)(n.value)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: [
                                    ["dateStart("], (0, o().Py)("Date Range"), [")"]
                                ],
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2022-09-07"))))]
                            }, {
                                input: [
                                    ["dateBetween(dateStart("], (0, o().Py)("Date Range"), ["), dateEnd("], (0, o().Py)("Date Range"), ['), "days")']
                                ],
                                output: [
                                    ["-365"]
                                ]
                            }],
                            [{
                                input: [(0, o().Py)("Date Range"), [".dateStart()"]],
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2022-09-07"))))]
                            }, {
                                input: [(0, o().Py)("Date Range"), [".dateStart().dateBetween("], (0, o().Py)("Date Range"), ['.dateEnd(), "days")']],
                                output: [
                                    ["-365"]
                                ]
                            }]
                        ],
                        syntax: ["dateStart(dateRange)", "dateRange.dateStart()"],
                        description: i.dateStart
                    },
                    dateEnd: {
                        name: "dateEnd",
                        * eval(e, t) {
                            let [n] = e;
                            return s("date" === n.type), {
                                type: "date",
                                value: (0, r(943003).mO)(n.value)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: [
                                    ["dateEnd("], (0, o().Py)("Date range"), [")"]
                                ],
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2023-09-07"))))]
                            }, {
                                input: [
                                    ["dateBetween(dateEnd("], (0, o().Py)("Date Range"), ["), dateStart("], (0, o().Py)("Date Range"), ['), "days")']
                                ],
                                output: "365"
                            }],
                            [{
                                input: [(0, o().Py)("Date Range"), [".dateEnd()"]],
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2023-09-07"))))]
                            }, {
                                input: [(0, o().Py)("Date Range"), [".dateEnd().dateBetween("], (0, o().Py)("Date Range"), ['.dateStart(), "days")']],
                                output: "365"
                            }]
                        ],
                        syntax: ["dateEnd(dateRange)", "dataRange.dateEnd()"],
                        description: i.dateEnd
                    },
                    timestamp: {
                        name: "timestamp",
                        * eval(e, t) {
                            let [n] = e;
                            return s("date" === n.type), {
                                type: "number",
                                value: (0, r(25825).ln)(n.value, t.userTimeZone)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "date"
                                }
                            }]
                        },
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: "timestamp(now())",
                                output: (0, r(25825).ln)((0, r(25825).T_)((0, r(714350).P)()), (0, r(714350).P)()).toString()
                            }],
                            [{
                                input: "now().timestamp()",
                                output: (0, r(25825).ln)((0, r(25825).T_)((0, r(714350).P)()), (0, r(714350).P)()).toString()
                            }]
                        ],
                        syntax: ["timestamp(date)", "date.timestamp()"],
                        description: i.timestamp
                    },
                    fromTimestamp: {
                        name: "fromTimestamp",
                        * eval(e, t) {
                            let [n] = e;
                            return s("number" === n.type), {
                                type: "date",
                                value: (0, r(25825).KQ)(n.value, t.userTimeZone)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "number"
                                }
                            }]
                        },
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: "fromTimestamp(1689024900000)",
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(25825).KQ)(16890249e5, (0, r(714350).P)())))]
                            }],
                            [{
                                input: "1689024900000.fromTimestamp()",
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(25825).KQ)(16890249e5, (0, r(714350).P)())))]
                            }]
                        ],
                        syntax: ["fromTimestamp(timestamp)", "timestamp.fromTimestamp()"],
                        description: i.fromTimestamp
                    },
                    formatDate: {
                        name: "formatDate",
                        * eval(e, t) {
                            let [n, i, u] = e;
                            s((null == n ? void 0 : n.type) === "date" && (null == i ? void 0 : i.type) === "text"), s(void 0 === u || (null == u ? void 0 : u.type) === "text");
                            let l = (0, o().m8)({
                                    timeZone: u,
                                    context: t
                                }),
                                p = (0, r(25825).AA)((0, r(943003).j1)(n.value), l, t.intl.locale).start;
                            if ("datetime" === n.value.type || "datetimerange" === n.value.type) {
                                let e = p.isValid;
                                if (p = p.setZone(l), e && !p.isValid) throw Error(`Invalid DateTime: ${p.invalidReason}`)
                            }
                            let d = yield*(0, a().o7)(i.value, t), y = `${Number(p)}:${l}:${t.intl.locale}:${d}`, c = t.formatDateCache.get(y);
                            return c || (c = (0, r(564433).u)(p, d), t.formatDateCache.set(y, c)), {
                                type: "text",
                                value: (0, r(247438).x9d)(c)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "date",
                                type: {
                                    type: "date"
                                }
                            }, {
                                name: "format",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "timezone",
                                type: {
                                    type: "text"
                                },
                                optional: !0
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'formatDate(now(), "MMMM D, Y")',
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().toFormat("LLLL d, y")],
                                    ['"']
                                ]
                            }, {
                                input: 'formatDate(now(), "YYYY-MM-DD HH:mm")',
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().toFormat("yyyy-LL-dd HH:mm")],
                                    ['"']
                                ]
                            }, {
                                input: 'formatDate(now(), "h:mm A", "UTC+1")',
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().setZone("UTC+1").toFormat("h:mm a")],
                                    ['"']
                                ]
                            }],
                            [{
                                input: 'now().formatDate("MMMM D, Y")',
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().toFormat("LLLL d, y")],
                                    ['"']
                                ]
                            }, {
                                input: 'now().formatDate("YYYY-MM-DD HH:mm")',
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().toFormat("yyyy-LL-dd HH:mm")],
                                    ['"']
                                ]
                            }, {
                                input: 'now().formatDate("h:mm A", "UTC+1")',
                                output: [
                                    ['"'],
                                    [r(906745).DateTime.now().setZone("UTC+1").toFormat("h:mm a")],
                                    ['"']
                                ]
                            }]
                        ],
                        syntax: ["formatDate(date, format, timezone?)", "date.formatDate(format, timezone?)"],
                        description: i.formatDate
                    },
                    parseDate: {
                        name: "parseDate",
                        * eval(e, t) {
                            let [n] = e;
                            s("text" === n.type);
                            let o = yield*(0, a().o7)(n.value, t), i = t.collectionFeatureGates.formulas_pass_timezone_when_parsing_date ? (0, r(629518).zA)(o, t.intl) : (0, r(629518).zA)(o);
                            return i ? {
                                type: "date",
                                value: (0, r(629518).pT)(i)
                            } : u
                        },
                        parameters: {
                            expected: [{
                                name: "dateString",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "date"
                        },
                        iconType: {
                            type: "date"
                        },
                        examples: [
                            [{
                                input: 'parseDate("2022-01-01")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2022-01-01"))))]
                            }, {
                                input: 'parseDate("2022-01-01T00:00Z")',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2022-01-01T00:00Z"))))]
                            }],
                            [{
                                input: '"2022-01-01".parseDate()',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2022-01-01"))))]
                            }, {
                                input: '"2022-01-01T00:00Z".parseDate()',
                                output: [(0, r(247438).wmz)((0, r(247438).Ww9)((0, r(629518).pT)(r(906745).DateTime.fromISO("2022-01-01T00:00Z"))))]
                            }]
                        ],
                        syntax: ["parseDate(dateText)", "dateText.parseDate()"],
                        description: i.parseDate
                    },
                    name: {
                        name: "name",
                        * eval(e, t) {
                            let [n] = e;
                            if (s("person" === n.type), (0, r(659341).I6)(n.value)) {
                                let e = (0, r(659341).S4)({
                                        spacePermissionGroupId: n.value.id,
                                        spaceId: n.value.spaceId
                                    }),
                                    a = (yield {
                                        recordPointers: [e]
                                    }).getRecordModel(e);
                                if (!a) throw new(r(944897)).x4({
                                    type: r(944897).v3.UserNotFound
                                });
                                return {
                                    type: "text",
                                    value: (0, r(247438).x9d)(a.getDisplayName(t.intl))
                                }
                            }
                            if ((0, r(197018).Pu)(n.value)) {
                                let e = (yield {
                                    recordPointers: [n.value]
                                }).getRecordModel(n.value);
                                if (!e) throw new(r(944897)).x4({
                                    type: r(944897).v3.UserNotFound
                                });
                                return {
                                    type: "text",
                                    value: (0, r(247438).x9d)(e.getDisplayName(t.intl))
                                }
                            }(0, r(722371).HB)(n.value)
                        },
                        parameters: {
                            expected: [{
                                name: "person",
                                type: {
                                    type: "person"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "person"
                        },
                        examples: [
                            [{
                                input: [
                                    ["name("], (0, o().pC)(r(416901).FormulaTokenSupportedBlockSystemProperty.CreatedBy), [")"]
                                ],
                                isCopyable: !0
                            }, {
                                input: [(0, o().Py)("Pioneers"), ['.map(name(current)).join(", ")']],
                                output: '"Grace Hopper, Ada Lovelace"'
                            }],
                            [{
                                input: [(0, o().pC)(r(416901).FormulaTokenSupportedBlockSystemProperty.CreatedBy), [".name()"]],
                                isCopyable: !0
                            }, {
                                input: [(0, o().Py)("Pioneers"), ['.map(current.name()).join(", ")']],
                                output: '"Grace Hopper, Ada Lovelace"'
                            }]
                        ],
                        syntax: ["name(person)", "person.name()"],
                        description: i.name
                    },
                    email: {
                        name: "email",
                        * eval(e, t) {
                            let [n] = e;
                            if (s("person" === n.type), (0, r(659341).I6)(n.value)) return {
                                type: "text",
                                value: (0, r(247438).x9d)("")
                            };
                            if ((0, r(197018).Pu)(n.value)) {
                                let e = (yield {
                                    recordPointers: [n.value]
                                }).getRecordModel(n.value);
                                if (!e) throw new(r(944897)).x4({
                                    type: r(944897).v3.UserNotFound
                                });
                                return e.isUser() ? {
                                    type: "text",
                                    value: (0, r(247438).x9d)(e.getEmail())
                                } : u
                            }(0, r(722371).HB)(n.value)
                        },
                        parameters: {
                            expected: [{
                                name: "person",
                                type: {
                                    type: "person"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "person"
                        },
                        examples: [
                            [{
                                input: [
                                    ["email("], (0, o().pC)(r(416901).FormulaTokenSupportedBlockSystemProperty.CreatedBy), [")"]
                                ],
                                isCopyable: !0
                            }, {
                                input: [(0, o().Py)("People"), ['.map(email(current)).join(", ")']]
                            }],
                            [{
                                input: [(0, o().pC)(r(416901).FormulaTokenSupportedBlockSystemProperty.CreatedBy), [".email()"]],
                                isCopyable: !0
                            }, {
                                input: [(0, o().Py)("People"), ['.map(current.email()).join(", ")']]
                            }]
                        ],
                        syntax: ["email(person)", "person.email()"],
                        description: i.email
                    },
                    at: {
                        name: "at",
                        * eval(e, t) {
                            let [r, n] = e;
                            s("array" === r.type && "number" === n.type);
                            let a = r.values.at(n.value);
                            return void 0 !== a ? a : u
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }, {
                                name: "index",
                                type: {
                                    type: "number"
                                }
                            }]
                        },
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e.of : {
                            type: "unknown"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "at([1, 2, 3], 1)",
                                output: "2"
                            }],
                            [{
                                input: "[1, 2, 3].at(1)",
                                output: "2"
                            }]
                        ],
                        syntax: ["at(list, index)", "list.at(index)"],
                        description: i.at
                    },
                    first: {
                        name: "first",
                        * eval(e, t) {
                            let [r] = e;
                            return (s("array" === r.type), r.values.length > 0) ? r.values[0] : u
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }]
                        },
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e.of : {
                            type: "unknown"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "first([1, 2, 3])",
                                output: "1"
                            }],
                            [{
                                input: "[1, 2, 3].first()",
                                output: "1"
                            }, {
                                input: "[].first()",
                                output: [
                                    ["empty", [
                                        ["i"]
                                    ]]
                                ]
                            }]
                        ],
                        syntax: ["first(list)", "list.first()"],
                        description: i.first
                    },
                    last: {
                        name: "last",
                        * eval(e, t) {
                            let [r] = e;
                            return (s("array" === r.type), r.values.length > 0) ? r.values[r.values.length - 1] : u
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }]
                        },
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e.of : {
                            type: "unknown"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "last([1, 2, 3])",
                                output: "3"
                            }],
                            [{
                                input: "[1, 2, 3].last()",
                                output: "3"
                            }]
                        ],
                        syntax: ["last(list)", "list.last()"],
                        description: i.last
                    },
                    slice: {
                        name: "slice",
                        * eval(e, t) {
                            let [r, n, a] = e;
                            return s("array" === r.type && "number" === n.type), {
                                type: "array",
                                values: r.values.slice(n.value, (null == a ? void 0 : a.type) === "number" ? a.value : void 0)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }, {
                                name: "startIndex",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "endIndex",
                                optional: !0,
                                type: {
                                    type: "number"
                                }
                            }]
                        },
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e : {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "slice([1, 2, 3], 1, 2)",
                                output: "[2]"
                            }, {
                                input: 'slice(["a", "b", "c"], 1)',
                                output: '["b", "c"]'
                            }],
                            [{
                                input: "[1, 2, 3].slice(1, 2)",
                                output: "[2]"
                            }, {
                                input: '["a", "b", "c"].slice(1)',
                                output: '["b", "c"]'
                            }]
                        ],
                        syntax: ["slice(list, startIndex, endIndex?)", "list.slice(startIndex, endIndex?)"],
                        description: i.slice
                    },
                    splice: {
                        name: "splice",
                        * eval(e, t) {
                            let [n, a, o, ...i] = e;
                            s("array" === n.type && "number" === a.type);
                            let u = i.length > 0 ? i.filter(r(722371).O9) : [],
                                l = [...n.values];
                            return l.splice(a.value, (null == o ? void 0 : o.type) === "number" ? o.value : 0, ...u), {
                                type: "array",
                                values: l
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }, {
                                name: "startIndex",
                                type: {
                                    type: "number"
                                }
                            }, {
                                name: "deleteCount",
                                optional: !0,
                                type: {
                                    type: "number"
                                }
                            }],
                            varargs: [{
                                name: "items",
                                type: {
                                    type: "unknown"
                                }
                            }]
                        },
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e : {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "splice([1, 2, 3], 1, 1)",
                                output: "[1, 3]"
                            }, {
                                input: 'splice(["a", "b", "c"], 0, 1, "d")',
                                output: '["d", "b", "c"]'
                            }],
                            [{
                                input: "[1, 2, 3].splice(1, 1)",
                                output: "[1, 3]"
                            }, {
                                input: '["a", "b", "c"].splice(0, 1, "d")',
                                output: '["d", "b", "c"]'
                            }]
                        ],
                        syntax: ["splice(list, startIndex, deleteCount?, ...)", "list.splice(startIndex, deleteCount?, ...)"],
                        description: i.splice
                    },
                    concat: {
                        name: "concat",
                        * eval(e) {
                            return {
                                type: "array",
                                values: e.flatMap(e => (s("array" === e.type), e.values.filter(e => "undefined" !== e.type)))
                            }
                        },
                        parameters: {
                            varargs: [{
                                name: "arg",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }]
                        },
                        returnType: e => {
                            let t = null == e ? void 0 : e[0];
                            if (void 0 === t) return {
                                type: "array",
                                of: {
                                    type: "unknown"
                                }
                            };
                            for (let r = 1; r < e.length; r++)
                                if (void 0 !== e[r] && !(0, a().Re)(e[r], t)) return {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                };
                            return t
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "concat([1, 2], [3, 4])",
                                output: "[1, 2, 3, 4]"
                            }, {
                                input: 'concat(["a", "b"], ["c", "d"])',
                                output: '["a", "b", "c", "d"]'
                            }],
                            [{
                                input: "[1, 2].concat([3, 4])",
                                output: "[1, 2, 3, 4]"
                            }, {
                                input: '["a", "b"].concat(["c", "d"])',
                                output: '["a", "b", "c", "d"]'
                            }]
                        ],
                        syntax: ["concat(list, list2, ...)", "list.concat(list2, ...)"],
                        description: i.concat
                    },
                    sort: {
                        name: "sort",
                        * eval(e, t) {
                            let [r, n] = e;
                            s("array" === r.type);
                            let a = r.values.filter(e => "undefined" !== e.type);
                            return {
                                type: "array",
                                values: void 0 !== n ? yield*(0, o().fr)(a, n, t): yield*(0, o().ZV)(a, t)
                            }
                        },
                        parameters: d,
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e : {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "sort([3, 1, 2])",
                                output: "[1, 2, 3]"
                            }, {
                                input: "sort([1, 2, 3]).reverse()",
                                output: "[3, 2, 1]"
                            }, {
                                input: 'sort(["Yash", "Stephen", "Paul", "Simon", "Ryo"])',
                                output: '["Paul", "Ryo", "Simon", "Stephen", "Yash"]'
                            }, {
                                input: [
                                    ["sort("], (0, o().Py)("Task"), [", current."], (0, o().Py)("Date"), [")"]
                                ],
                                isCopyable: !1
                            }],
                            [{
                                input: "[3, 1, 2].sort()",
                                output: "[1, 2, 3]"
                            }, {
                                input: "[1, 2, 3].sort().reverse()",
                                output: "[3, 2, 1]"
                            }, {
                                input: '["Yash", "Stephen", "Paul", "Simon", "Ryo"].sort()',
                                output: '["Paul", "Ryo", "Simon", "Stephen", "Yash"]'
                            }, {
                                input: [(0, o().Py)("Task"), [".sort(current."], (0, o().Py)("Date"), [")"]],
                                isCopyable: !1
                            }]
                        ],
                        syntax: ["sort(list, expression?)", "list.sort(expression?)"],
                        description: i.sort
                    },
                    reverse: {
                        name: "reverse",
                        * eval(e, t) {
                            let [r] = e;
                            return s("array" === r.type), {
                                type: "array",
                                values: [...r.values].reverse()
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }]
                        },
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e : {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: 'reverse(["green", "eggs", "ham"])',
                                output: '["ham", "eggs", "green"]'
                            }],
                            [{
                                input: '["green", "eggs", "ham"].reverse()',
                                output: '["ham", "eggs", "green"]'
                            }]
                        ],
                        syntax: ["reverse(list)", "list.reverse()"],
                        description: i.reverse
                    },
                    join: {
                        name: "join",
                        * eval(e, t) {
                            let [n, o] = e;
                            s("array" === n.type && "text" === o.type);
                            let i = n.values.map(e => (0, a().Ht)(e));
                            return {
                                type: "text",
                                value: (0, r(247438).__s)((0, r(405843).G)(i, () => o.value).flat())
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }, {
                                name: "joiner",
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: 'join(["a", "b", "c"], ", ")',
                                output: '"a, b, c"'
                            }, {
                                input: 'join(["dog", "go"], "")',
                                output: '"doggo"'
                            }],
                            [{
                                input: '["a", "b", "c"].join(", ")',
                                output: '"a, b, c"'
                            }, {
                                input: '["dog", "go"].join("")',
                                output: '"doggo"'
                            }]
                        ],
                        syntax: ["join(list, joiner)", "list.join(joiner)"],
                        description: i.join
                    },
                    split: {
                        name: "split",
                        * eval(e, t) {
                            let [n, o] = e;
                            s("text" === n.type), s(void 0 === o || "text" === o.type);
                            let [i, u] = yield*(0, a().h8)([n.value, null == o ? void 0 : o.value], t);
                            if ("" === i) return {
                                type: "array",
                                values: []
                            };
                            let l = " " === u || void 0 === o;
                            return {
                                type: "array",
                                values: i.split(l ? /\s+/ : u).filter(e => !l || e.length > 0).map(e => ({
                                    type: "text",
                                    value: (0, r(247438).x9d)(e)
                                }))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "input",
                                type: {
                                    type: "text"
                                }
                            }, {
                                name: "separator",
                                optional: !0,
                                type: {
                                    type: "text"
                                }
                            }]
                        },
                        returnType: {
                            type: "array",
                            of: {
                                type: "text"
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: 'split("apple,pear,orange", ",")',
                                output: '["apple", "pear", "orange"]'
                            }],
                            [{
                                input: '"apple,pear,orange".split(",")',
                                output: '["apple", "pear", "orange"]'
                            }]
                        ],
                        syntax: ["split(text, separator)", "text.split(separator)"],
                        description: i.split
                    },
                    unique: {
                        name: "unique",
                        * eval(e, t) {
                            let [r] = e;
                            s("array" === r.type);
                            let o = [];
                            for (let e of r.values)(yield*(0, n().KZ)(o.map(r => (0, a().zV)(r, e, t)))).some(e => e) || o.push(e);
                            return {
                                type: "array",
                                values: o
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }]
                        },
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? e : {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "unique([1, 1, 2])",
                                output: "[1, 2]"
                            }],
                            [{
                                input: "[1, 1, 2].unique()",
                                output: "[1, 2]"
                            }]
                        ],
                        syntax: ["unique(list)", "list.unique()"],
                        description: i.unique
                    },
                    includes: {
                        name: "includes",
                        * eval(e, t) {
                            let [r, n] = e;
                            for (let e of (s("array" === r.type), r.values))
                                if (yield*(0, a().zV)(e, n, t)) return {
                                    type: "checkbox",
                                    value: !0
                                };
                            return {
                                type: "checkbox",
                                value: !1
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }, {
                                name: "needle",
                                type: {
                                    type: "unknown"
                                }
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: 'includes(["a", "b", "c"], "b")',
                                output: "true"
                            }, {
                                input: "includes([1, 2, 3], 4)",
                                output: "false"
                            }],
                            [{
                                input: '["a", "b", "c"].includes("b")',
                                output: "true"
                            }, {
                                input: "[1, 2, 3].includes(4)",
                                output: "false"
                            }]
                        ],
                        syntax: ["includes(list, search)", "list.includes(search)"],
                        description: i.includes
                    },
                    find: {
                        name: "find",
                        * eval(e, t) {
                            let r, n, [i, u] = e;
                            s("array" === i.type);
                            for (let e = 0; e < i.values.length; e++)
                                if (r = i.values[e], n = yield*(0, o().iZ)(u, { ...t,
                                        values: [...h(r, e), ...t.values]
                                    }), (0, a().CL)(n)) return r;
                            return {
                                type: "undefined"
                            }
                        },
                        parameters: p,
                        returnType: ([e, t]) => (null == e ? void 0 : e.type) === "array" ? e.of : {
                            type: "unknown"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'find(["a", "b", "c"], current == "b")',
                                output: '"b"'
                            }, {
                                input: "find([1, 2, 3], current > 100)",
                                output: [
                                    ["empty", [
                                        ["i"]
                                    ]]
                                ]
                            }],
                            [{
                                input: '["a", "b", "c"].find(current == "b")',
                                output: '"b"'
                            }, {
                                input: "[1, 2, 3].find(current > 100)",
                                output: [
                                    ["empty", [
                                        ["i"]
                                    ]]
                                ]
                            }]
                        ],
                        syntax: ["find(list, condition)", "list.find(condition)"],
                        description: i.find
                    },
                    findIndex: {
                        name: "findIndex",
                        * eval(e, t) {
                            let r, n, [i, u] = e;
                            s("array" === i.type);
                            for (let e = 0; e < i.values.length; e++)
                                if (r = i.values[e], n = yield*(0, o().iZ)(u, { ...t,
                                        values: [...h(r, e), ...t.values]
                                    }), (0, a().CL)(n)) return {
                                    type: "number",
                                    value: e
                                };
                            return {
                                type: "number",
                                value: -1
                            }
                        },
                        parameters: p,
                        returnType: {
                            type: "number"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'findIndex(["a", "b", "c"], current == "b")',
                                output: "1"
                            }, {
                                input: "findIndex([1, 2, 3], current > 100)",
                                output: "-1"
                            }],
                            [{
                                input: '["a", "b", "c"].findIndex(current == "b")',
                                output: "1"
                            }, {
                                input: "[1, 2, 3].findIndex(current > 100)",
                                output: "-1"
                            }]
                        ],
                        syntax: ["findIndex(list, condition)", "list.findIndex(condition)"],
                        description: i.findIndex
                    },
                    filter: {
                        name: "filter",
                        * eval(e, t) {
                            let [r, n] = e;
                            s("array" === r.type);
                            let i = yield*(0, o()._2)(r.values, n, t);
                            return {
                                type: "array",
                                values: r.values.filter((e, t) => (0, a().CL)(i[t]))
                            }
                        },
                        parameters: p,
                        returnType: ([e, t]) => (null == e ? void 0 : e.type) === "array" ? e : {
                            type: "unknown"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "filter([1, 2, 3], current > 1)",
                                output: "[2, 3]"
                            }, {
                                input: 'filter(["a", "b", "c"], current == "a")',
                                output: '["a"]'
                            }],
                            [{
                                input: "[1, 2, 3].filter(current > 1)",
                                output: "[2, 3]"
                            }, {
                                input: '["a", "b", "c"].filter(current == "a")',
                                output: '["a"]'
                            }]
                        ],
                        syntax: ["filter(list, condition)", "list.filter(condition)"],
                        description: i.filter
                    },
                    some: {
                        name: "some",
                        * eval(e, t) {
                            let r, n, [i, u] = e;
                            s("array" === i.type);
                            for (let e = 0; e < i.values.length; e++)
                                if (r = i.values[e], n = yield*(0, o().iZ)(u, { ...t,
                                        values: [...h(r, e), ...t.values]
                                    }), (0, a().CL)(n)) return {
                                    type: "checkbox",
                                    value: !0
                                };
                            return {
                                type: "checkbox",
                                value: !1
                            }
                        },
                        parameters: p,
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "some([1, 2, 3], current == 2)",
                                output: "true"
                            }, {
                                input: 'some(["a", "b", "c"], current.length > 2)',
                                output: "false"
                            }],
                            [{
                                input: "[1, 2, 3].some(current == 2)",
                                output: "true"
                            }, {
                                input: '["a", "b", "c"].some(current.length > 2)',
                                output: "false"
                            }]
                        ],
                        syntax: ["some(list, expression)", "list.some(expression)"],
                        description: i.some
                    },
                    every: {
                        name: "every",
                        * eval(e, t) {
                            let r, n, [i, u] = e;
                            s("array" === i.type);
                            for (let e = 0; e < i.values.length; e++)
                                if (r = i.values[e], n = yield*(0, o().iZ)(u, { ...t,
                                        values: [...h(r, e), ...t.values]
                                    }), !(0, a().CL)(n)) return {
                                    type: "checkbox",
                                    value: !1
                                };
                            return {
                                type: "checkbox",
                                value: !0
                            }
                        },
                        parameters: p,
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "every([1, 2, 3], current > 0)",
                                output: "true"
                            }, {
                                input: 'every(["a", "b", "c"], current == "b")',
                                output: "false"
                            }],
                            [{
                                input: "[1, 2, 3].every(current > 0)",
                                output: "true"
                            }, {
                                input: '["a", "b", "c"].every(current == "b")',
                                output: "false"
                            }]
                        ],
                        syntax: ["every(list, condition)", "list.every(condition)"],
                        description: i.every
                    },
                    map: {
                        name: "map",
                        * eval(e, t) {
                            let [r, n] = e;
                            return s("array" === r.type), {
                                type: "array",
                                values: yield*(0, o()._2)(r.values, n, t)
                            }
                        },
                        parameters: p,
                        returnType: ([e, t]) => {
                            let r = (null == e ? void 0 : e.type) === "array" ? e.sourceRelationPropertyId : void 0;
                            return {
                                type: "array",
                                of: t ? ? {
                                    type: "unknown"
                                },
                                ...void 0 !== r && {
                                    sourceRelationPropertyId: r
                                }
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "text"
                            }
                        },
                        examples: [
                            [{
                                input: "map([1, 2, 3], current + 1)",
                                output: "[2, 3, 4]"
                            }, {
                                input: "map([1, 2, 3], current + index)",
                                output: "[1, 3, 5]"
                            }],
                            [{
                                input: "[1, 2, 3].map(current + 1)",
                                output: "[2, 3, 4]"
                            }, {
                                input: "[1, 2, 3].map(current + index)",
                                output: "[1, 3, 5]"
                            }]
                        ],
                        syntax: ["map(list, expression)", "list.map(expression)"],
                        description: i.map
                    },
                    flat: {
                        name: "flat",
                        * eval(e, t) {
                            let [r] = e;
                            s("array" === r.type);
                            let n = [];
                            for (let e of r.values) "array" === e.type ? n.push(...e.values) : n.push(e);
                            return {
                                type: "array",
                                values: n
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "list",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }]
                        },
                        returnType: ([e]) => {
                            let t, r = {
                                type: "unknown"
                            };
                            return (null == e ? void 0 : e.type) === "array" && ("array" === e.of.type ? (r = e.of.of, t = e.of.sourceRelationPropertyId) : (r = e.of, t = e.sourceRelationPropertyId)), {
                                type: "array",
                                of: r,
                                ...void 0 !== t && {
                                    sourceRelationPropertyId: t
                                }
                            }
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "flat([1, 2, 3])",
                                output: "[1, 2, 3]"
                            }, {
                                input: "flat([[1, 2], [3, 4]])",
                                output: "[1, 2, 3, 4]"
                            }],
                            [{
                                input: "[1, 2, 3].flat()",
                                output: "[1, 2, 3]"
                            }, {
                                input: "[[1, 2], [3, 4]].flat()",
                                output: "[1, 2, 3, 4]"
                            }]
                        ],
                        syntax: ["flat(list, list2?, ...)", "list.flat(list2?, ...)"],
                        description: i.flat
                    },
                    id: {
                        name: "id",
                        * eval(e, t) {
                            let [n] = e;
                            if (!n) {
                                var a;
                                let e = null == (a = t.values.find(e => e.kind === r(416901).FormulaContextValueKind.ThisRow)) ? void 0 : a.value;
                                if ((null == e ? void 0 : e.type) !== "block") throw new(r(944897)).x4({
                                    type: r(944897).v3.TryingToGetIdWithoutThisRow
                                });
                                return {
                                    type: "text",
                                    value: (0, r(247438).x9d)((0, r(4962).Xw)(e.value.id))
                                }
                            }
                            return s("block" === n.type || "person" === n.type), {
                                type: "text",
                                value: (0, r(247438).x9d)((0, r(4962).Xw)(n.value.id))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "value",
                                type: [{
                                    type: "person"
                                }, {
                                    type: "block"
                                }],
                                optional: !0
                            }]
                        },
                        returnType: {
                            type: "text"
                        },
                        iconType: {
                            type: "text"
                        },
                        syntax: ["id(value?)", "value.id()"],
                        examples: [
                            [{
                                input: "id()"
                            }, {
                                input: [
                                    ["id("], (0, o().Py)("Relation"), [".first())"]
                                ]
                            }, {
                                input: [
                                    ["id("], (0, o().Py)("Person"), [".first())"]
                                ]
                            }],
                            [{
                                input: [(0, o().Py)("Relation"), [".first().id()"]]
                            }, {
                                input: [(0, o().Py)("Person"), [".first().id()"]]
                            }]
                        ],
                        description: i.id
                    },
                    equal: {
                        name: "equal",
                        * eval(e, t) {
                            let [r, n] = e;
                            return {
                                type: "checkbox",
                                value: yield*(0, a().zV)(r, n, t)
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "lhs",
                                type: {
                                    type: "unknown"
                                }
                            }, {
                                name: "rhs",
                                type: {
                                    type: "unknown"
                                }
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: "equal(1, 1)",
                                output: "true"
                            }, {
                                input: '"a" == "b"',
                                output: "false"
                            }],
                            [{
                                input: "1.equal(1)",
                                output: "true"
                            }, {
                                input: '"a" == "b"',
                                output: "false"
                            }]
                        ],
                        syntax: ["equal(value, value)", "value.equal(value)"],
                        description: i.equal
                    },
                    unequal: {
                        name: "unequal",
                        * eval(e, t) {
                            let [r, n] = e;
                            return {
                                type: "checkbox",
                                value: !(yield*(0, a().zV)(r, n, t))
                            }
                        },
                        parameters: {
                            expected: [{
                                name: "lhs",
                                type: {
                                    type: "unknown"
                                }
                            }, {
                                name: "rhs",
                                type: {
                                    type: "unknown"
                                }
                            }]
                        },
                        returnType: {
                            type: "checkbox"
                        },
                        iconType: {
                            type: "checkbox"
                        },
                        examples: [
                            [{
                                input: "unequal(1, 2)",
                                output: "true"
                            }, {
                                input: '"a" != "a"',
                                output: "false"
                            }],
                            [{
                                input: "1.unequal(2)",
                                output: "true"
                            }, {
                                input: '"a" != "a"',
                                output: "false"
                            }]
                        ],
                        syntax: ["unequal(value, value)", "value.unequal(value)"],
                        description: i.unequal
                    },
                    let: {
                        name: "let",
                        * eval() {
                            throw new(r(194943)).V("let() should be compiled, not evaluated as a library function")
                        },
                        parameters: {
                            varargs: [{
                                name: "args",
                                type: {
                                    type: "expression"
                                }
                            }]
                        },
                        returnType: ([e, t, r]) => r ? ? {
                            type: "unknown"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'let(name, "Doug Engelbart", "Hello, " + name + "!")',
                                output: '"Hello, Doug Engelbart!"'
                            }, {
                                input: "let(radius, 4, round(pi() * radius ^ 2))",
                                output: "50"
                            }],
                            [{
                                input: 'name.let("Alan Kay", "Hello, " + name + "!")',
                                output: '"Hello, Alan Kay!"'
                            }, {
                                input: "radius.let(4, round(pi() * radius ^ 2)",
                                output: "50"
                            }]
                        ],
                        syntax: ["let(variable, value, expression)", "variable.let(value, expression)"],
                        description: i.let
                    },
                    lets: {
                        name: "lets",
                        * eval() {
                            throw new(r(194943)).V("lets() should be compiled, not evaluated as a library function")
                        },
                        parameters: {
                            varargs: [{
                                name: "args",
                                type: {
                                    type: "expression"
                                }
                            }]
                        },
                        returnType: e => e[e.length - 1] ? ? {
                            type: "unknown"
                        },
                        iconType: {
                            type: "text"
                        },
                        examples: [
                            [{
                                input: 'lets(a, "Hello", b, "world", a + " " + b)',
                                output: '"Hello world"'
                            }, {
                                input: "lets(base, 3, height, 8, base * height / 2)",
                                output: "12"
                            }],
                            []
                        ],
                        syntax: ["lets(variable, value, variable2, value2, ..., expression)", "variable.lets(value, variable2, value2, ..., expression)"],
                        description: i.lets
                    },
                    _unsafeCastArray: {
                        name: "_unsafeCastArray",
                        description: i._unsafeCastArray,
                        * eval(e, t) {
                            let [r, n] = e;
                            return s("array" === r.type), s("array" === n.type), r
                        },
                        parameters: {
                            expected: [{
                                name: "arrayToConvert",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }, {
                                name: "typeTemplate",
                                type: {
                                    type: "array",
                                    of: {
                                        type: "unknown"
                                    }
                                }
                            }]
                        },
                        returnType: ([e, t]) => t ? ? {
                            type: "unknown"
                        },
                        iconType: {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        },
                        examples: [
                            [{
                                input: "_unsafeCastArray([1, 2, 3], [true, false])",
                                output: "[1, 2, 3]"
                            }]
                        ],
                        syntax: ["_unsafeCastArray(arrayToConvert, typeTemplate)"]
                    },
                    count: {
                        name: "count",
                        description: i.count,
                        * eval(e, t) {
                            let [i, u] = e;
                            if (s("array" === i.type), !(0, r(722371).O9)(u)) return {
                                type: "number",
                                value: i.values.length
                            };
                            let l = 0;
                            return yield*(0, n().KZ)(i.values.map(function*(e, n) {
                                let i = yield*(0, o().iZ)(u, { ...t,
                                    values: [{
                                        kind: r(416901).FormulaContextValueKind.Binding,
                                        id: r(416901).CURRENT_VALUE_NAME,
                                        value: e
                                    }, {
                                        kind: r(416901).FormulaContextValueKind.Binding,
                                        id: r(416901).CURRENT_INDEX_NAME,
                                        value: {
                                            type: "number",
                                            value: n
                                        }
                                    }, ...t.values]
                                });
                                (0, a().CL)(i) && (l += 1)
                            })), {
                                type: "number",
                                value: l
                            }
                        },
                        parameters: d,
                        returnType: ([e]) => (null == e ? void 0 : e.type) === "array" ? {
                            type: "number"
                        } : {
                            type: "unknown"
                        },
                        iconType: {
                            type: "number"
                        },
                        examples: [
                            [{
                                input: "count([1, 2, 3, 4], current % 2 == 0)",
                                output: "2"
                            }, {
                                input: 'count(["a", "b", "c"], current == "d")',
                                output: "0"
                            }],
                            [{
                                input: "[1, 2, 3, 4].count(current % 2 == 0)",
                                output: "2"
                            }, {
                                input: '["a", "b", "c"].count(current == "d")',
                                output: "0"
                            }]
                        ],
                        syntax: ["count(list, condition)", "list.count(condition)"]
                    }
                };
            ({ ...y,
                _wait: {
                    name: "_wait",
                    description: i._wait,
                    * eval(e, t) {
                        let [r, n] = e;
                        s("number" === r.type);
                        let a = new Date().getTime() + Math.min(r.value, 5e3);
                        for (; new Date().getTime() < a;);
                        return n
                    },
                    parameters: {
                        expected: [{
                            name: "length",
                            type: {
                                type: "number"
                            }
                        }, {
                            name: "result",
                            type: {
                                type: "unknown"
                            }
                        }]
                    },
                    returnType: {
                        type: "unknown"
                    },
                    iconType: {
                        type: "unknown"
                    },
                    examples: [
                        [{
                            input: "_wait(100, true)",
                            output: "true"
                        }]
                    ],
                    syntax: ["_wait(delay, result)"]
                }
            });
            let c = y,
                m = ["block", "array", "person"],
                f = ["let", "lets"];

            function h(e, t) {
                return [{
                    kind: r(416901).FormulaContextValueKind.Binding,
                    id: r(416901).CURRENT_VALUE_NAME,
                    value: e
                }, {
                    kind: r(416901).FormulaContextValueKind.Binding,
                    id: r(416901).CURRENT_INDEX_NAME,
                    value: {
                        type: "number",
                        value: t
                    }
                }]
            }

            function g({
                context: e,
                pattern: t,
                flags: n
            }) {
                let a, o = `${t}|${n}`,
                    i = e.regExpCache.get(o);
                if (i) return i.lastIndex = 0, i;
                if ("[^T]*$" === t) try {
                    a = RegExp("(?<=^|T)[^T]*$", n)
                } catch (e) {
                    a = new RegExp(t, n)
                } else a = new RegExp(t, n);
                if (!(0, r(899666).x)(t) && (e.logUnsafeRegexFn && e.logUnsafeRegexFn(t, n), e.collectionFeatureGates.formulas_block_unsafe_regex)) throw new(r(944897)).x4({
                    type: r(944897).v3.UnsafeRegexBlocked,
                    pattern: t
                });
                return e.regExpCache.set(o, a), a
            }
            let v = {
                if: "generic",
                ifs: "generic",
                let: "generic",
                lets: "generic",
                and: "generic",
                or: "generic",
                not: "generic",
                equal: "generic",
                unequal: "generic",
                empty: "generic",
                length: "generic",
                format: "generic",
                concat: "text",
                join: "text",
                split: "text",
                substring: "text",
                contains: "text",
                lower: "text",
                upper: "text",
                trim: "text",
                replace: "text",
                replaceAll: "text",
                test: "text",
                match: "text",
                link: "text",
                style: "text",
                unstyle: "text",
                padStart: "text",
                padEnd: "text",
                repeat: "text",
                add: "number",
                subtract: "number",
                multiply: "number",
                divide: "number",
                mod: "number",
                pow: "number",
                sum: "number",
                max: "number",
                min: "number",
                mean: "number",
                median: "number",
                abs: "number",
                round: "number",
                ceil: "number",
                floor: "number",
                sqrt: "number",
                cbrt: "number",
                exp: "number",
                ln: "number",
                log10: "number",
                log2: "number",
                sign: "number",
                pi: "number",
                e: "number",
                toNumber: "number",
                formatNumber: "number",
                now: "date",
                today: "date",
                minute: "date",
                hour: "date",
                day: "date",
                date: "date",
                month: "date",
                year: "date",
                week: "date",
                dateAdd: "date",
                dateSubtract: "date",
                dateBetween: "date",
                formatDate: "date",
                fromTimestamp: "date",
                timestamp: "date",
                dateStart: "date",
                dateEnd: "date",
                dateRange: "date",
                parseDate: "date",
                name: "people",
                email: "people",
                at: "list",
                first: "list",
                last: "list",
                slice: "list",
                splice: "list",
                reverse: "list",
                sort: "list",
                unique: "list",
                includes: "list",
                map: "list",
                filter: "list",
                find: "list",
                findIndex: "list",
                some: "list",
                every: "list",
                flat: "list",
                count: "list",
                id: "special",
                _unsafeCastArray: "internal",
                _wait: "internal"
            }
        },
        194943: (e, t, r) => {
            r.d(t, {
                V: () => n,
                o: () => a
            }), r(16280);
            class n extends Error {
                constructor(e) {
                    super(`Violated invariant in the formula compiler: ${e}`)
                }
            }

            function a(e, t = "expected value to exist") {
                return r(148337).o9(e, t, void 0, n)
            }
        },
        299512: (e, t, r) => {
            r.r(t), r.d(t, {
                FormulaContextValueKind: () => m().FormulaContextValueKind,
                FormulaParsingInstrumentation: () => i().nM,
                addTypesToFormulaAST: () => a().y,
                addTypesToFormulaASTAsync: () => a()._,
                analyzeFormula: () => g,
                analyzeFormulaSync: () => v,
                cleanFormulaTypecheckerErrors: () => c,
                convertCollectionFormulaToFormula2: () => l().Jb,
                convertFormulaCSTToAST: () => s().f,
                createFormulaDataRequestSyncHandler: () => o().zg,
                evaluateCollectionFormula2: () => p().MC,
                evaluateCollectionFormula2WithoutCache: () => p().kL,
                evaluateFormulaASTAsync: () => n().cZ,
                evaluateFormulaProperty: () => d().L7,
                evaluateRawCollectionFormula2: () => p().UJ,
                executeFormulaAsync: () => h,
                executeFormulaSync: () => f,
                findFormulaEvaluationContextValue: () => o().q$,
                findFormulaTypecheckContextValue: () => o().IV,
                formulaResultAndOldFormulaValueEqual: () => o().bW,
                formulaValueToCollectionFormulaValue: () => p().Y7,
                fromSerializedContextValueId: () => o().y5,
                getFormula2Dependencies: () => b,
                getFormula2ResultCache: () => p().wr,
                getFormula2Thunk: () => p().J6,
                getFormulaDependencies: () => x,
                hasUniformType: () => p().dA,
                isUniqueFormulaEvaluatorError: () => o().R2,
                mapExecuteFormulaResult: () => p().jA,
                parseFormulaInputToAst: () => i().$t,
                parseFormulaInputToCst: () => i().tP,
                primitiveFormulaValueFromPropertySchema: () => p().LO,
                processFormulaInput: () => u().kb,
                propertyToFormulaValue: () => d().ws,
                propertyToFormulaValueAsString: () => d().by,
                setFormula2ResultCache: () => p().wZ,
                setFormula2Thunk: () => p().rV,
                setFormulaParsingInstrumentation: () => i().BC,
                textValueToFormulaTokens: () => o().K5,
                timestampToFormulaValue: () => d().NI
            });
            var n = () => r(337663),
                a = () => r(929579),
                o = () => r(297493),
                i = () => r(807381),
                s = () => r(892016),
                u = () => r(301040),
                l = () => r(859848),
                p = () => r(378675),
                d = () => r(408343);
            r(581454);
            let y = Symbol("CleanedFormulaTypecheckerErrorInfo");

            function c(e) {
                return e.map(e => (0, r(722371).GV)(function(e) {
                    if (e.type === r(944897).IA.ThisRowTypeNotFound || e.type === r(944897).IA.ThisRowNotBlockWithCollection) return {
                        type: e.type
                    };
                    if (e.type === r(944897).IA.ContextVariableNotBlockWithCollection) return {
                        type: e.type,
                        token: e.token
                    };
                    if (e.type === r(944897).IA.MissingPropertyOnThisRow) return {
                        type: e.type,
                        property: e.property
                    };
                    if (e.type === r(944897).IA.MissingPropertyOnContextVariable) return {
                        type: e.type,
                        property: e.property,
                        token: e.token
                    };
                    else if (e.type === r(944897).IA.MissingContextVariable) return {
                        type: e.type,
                        token: e.token
                    };
                    else if (e.type === r(944897).IA.MissingBlock) return {
                        type: e.type,
                        token: e.token
                    };
                    else if (e.type === r(944897).IA.CallingNotFunction) return {
                        type: e.type,
                        calleeKind: e.callee.kind
                    };
                    else if (e.type === r(944897).IA.FunctionCallTooFewArguments) return {
                        type: e.type,
                        libraryFunctionName: e.libraryFunction.name,
                        numArguments: e.numArguments,
                        minNumParameters: e.minNumParameters
                    };
                    else if (e.type === r(944897).IA.FunctionCallUnexpectedArgument) return {
                        type: e.type,
                        libraryFunctionName: e.libraryFunction.name,
                        parameterIndex: e.parameterIndex
                    };
                    else if (e.type === r(944897).IA.FunctionCallArgumentWrongType) return {
                        type: e.type,
                        libraryFunctionName: e.libraryFunction.name,
                        parameterName: e.expectedParameter.name
                    };
                    else if (e.type === r(944897).IA.MemberPropertyMismatchCollection) return {
                        type: e.type,
                        token: e.token.collection ? e.token : {
                            property: e.token.property
                        }
                    };
                    else if (e.type === r(944897).IA.MemberPropertyMissing) return {
                        type: e.type,
                        textValproperty: e.property
                    };
                    else if (e.type === r(944897).IA.MemberPropertyTargetNotBlock) return {
                        type: e.type,
                        expressionKind: e.expression.kind
                    };
                    else if (e.type === r(944897).IA.MemberPropertyTypeInvalid) return {
                        type: e.type,
                        propertyName: e.propertyName,
                        propertyType: e.propertyType
                    };
                    else if (e.type === r(944897).IA.BlockPropertyTypeInvalid) return {
                        type: e.type,
                        propertyName: e.propertyName,
                        propertyType: e.propertyType
                    };
                    else if (e.type === r(944897).IA.UndefinedIdentifier) return {
                        type: e.type,
                        identifier: e.node
                    };
                    else if (e.type === r(944897).IA.UnifiedFunctionCannotFindFunction) return {
                        type: e.type,
                        name: e.name
                    };
                    else if (e.type === r(944897).IA.UnifiedFunctionNoArguments) return {
                        type: e.type,
                        libraryFunctionName: e.libraryFunction.name
                    };
                    else if (e.type === r(944897).IA.UnifiedFunctionTargetWrongType) return {
                        type: e.type,
                        libraryFunctionName: e.libraryFunction.name,
                        expressionKind: e.expression.kind
                    };
                    else if (e.type === r(944897).IA.CannotRelativelyCompareTypes) return {
                        type: e.type,
                        lhsType: e.lhsType.type,
                        rhsType: e.rhsType.type
                    };
                    else if (e.type === r(944897).IA.CannotDoMathOnType) return {
                        type: e.type,
                        nodeKind: e.node.kind,
                        lhsType: e.lhsType.type,
                        rhsType: e.rhsType.type
                    };
                    else if (e.type === r(944897).IA.UnaryMinusOnNonNumber) return {
                        type: e.type,
                        nodeKind: e.node.kind
                    };
                    else if (e.type === r(944897).IA.IdentifierExpected) return {
                        type: e.type,
                        startOffset: e.node.startOffset
                    };
                    else if (e.type === r(944897).IA.FunctionCallExpected) return {
                        type: e.type,
                        startOffset: e.node.startOffset,
                        functionName: e.functionName
                    };
                    else if (e.type === r(944897).IA.RenamedIdentifier) return {
                        type: e.type,
                        identifier: e.identifier,
                        renamedTo: e.renamedTo
                    };
                    else if (e.type === r(944897).IA.RemovedFunction) return {
                        type: e.type,
                        functionName: e.functionName,
                        alternative: e.alternative
                    };
                    else if (e.type === r(944897).IA.DisallowedReturnType) return {
                        type: e.type,
                        startOffset: e.node.startOffset,
                        returnType: e.returnType.type,
                        allowedReturnTypes: e.allowedReturnTypes.map(e => e.type)
                    };
                    else if (e.type === r(944897).IA.CrossSpacePropertyNotSupported) return {
                        type: e.type,
                        property: e.property
                    };
                    else if (e.type === r(944897).IA.CalledFunctionOnEmptyValue) {
                        var t;
                        return {
                            type: e.type,
                            startOffset: e.node.startOffset,
                            functionName: (null == (t = e.libraryFunction) ? void 0 : t.name) ? ? null
                        }
                    } else {
                        if (e.type === r(944897).IA.InvalidPropCall || e.type === r(944897).IA.InvalidContextCall || e.type === r(944897).IA.InvalidVariableCall) return {
                            type: e.type,
                            name: e.name
                        };
                        if (e.type === r(944897).IA.CallingFunctionWithUnknownArgument) return {
                            type: e.type,
                            startOffset: e.node.startOffset,
                            functionName: e.libraryFunction.name,
                            parameterIndex: e.parameterIndex
                        };
                        if (e.type === r(944897).IA.CallingFunctionWithUnknownTarget) return {
                            type: e.type,
                            startOffset: e.node.startOffset,
                            functionName: e.libraryFunction.name
                        };
                        if (e.type === r(944897).IA.UnsafeRegexPattern) return {
                            type: e.type,
                            startOffset: e.node.startOffset,
                            functionName: e.functionName,
                            reason: e.reason
                        };
                        (0, r(722371).HB)(e)
                    }
                }(e), y))
            }
            var m = () => r(416901);

            function f(e, t) {
                var a;
                let o = (0, i().$t)(e);
                if (r(300441).Q.isFail(o)) return o;
                let s = (0, r(4962).Ay)(),
                    u = { ...t,
                        formulaEvaluationId: s
                    },
                    l = (0, n().Ox)(t),
                    p = (0, n().PX)(l, o.value);
                if (r(300441).Q.isFail(p)) return p;
                let d = (0, n().YQ)(p.value, u);
                return null == (a = u.logFormulaStatsFn) || a.call(u, {
                    formulaEvaluationId: s,
                    commitPerRowStats: !0
                }), d
            }
            async function h(e, t) {
                var a;
                let o = (0, i().$t)(e);
                if (r(300441).Q.isFail(o)) return o;
                let s = (0, r(4962).Ay)(),
                    u = { ...t,
                        formulaEvaluationId: s
                    },
                    l = (0, n().Ox)(t),
                    p = (0, n().PX)(l, o.value);
                if (r(300441).Q.isFail(p)) return p;
                let d = await (0, n().Xs)(p.value, u);
                return null == (a = u.logFormulaStatsFn) || a.call(u, {
                    formulaEvaluationId: s,
                    commitPerRowStats: !0
                }), d
            }
            async function g(e, t) {
                let n = (0, i().$t)(e);
                if (r(300441).Q.isFail(n)) return {
                    value: {
                        parseErrors: [n.error]
                    }
                };
                let {
                    node: o,
                    errors: s,
                    warnings: u
                } = await (0, a()._)(n.value, t);
                return {
                    value: {
                        type: o.type,
                        typeErrors: s,
                        typeWarnings: u,
                        resultExists: o.exists
                    }
                }
            }

            function v(e, t) {
                let n = (0, i().$t)(e);
                if (r(300441).Q.isFail(n)) return {
                    parseErrors: [n.error]
                };
                let {
                    node: o,
                    errors: s,
                    warnings: u
                } = (0, a().y)(n.value, t);
                return {
                    type: o.type,
                    typeErrors: s,
                    typeWarnings: u,
                    resultExists: o.exists
                }
            }

            function x(e) {
                return "formula" !== e.type ? [] : (0, r(537664).F)(e) ? e.formula2 ? b(e.formula2.code) : [] : (0, r(162207).kh)(e.formula)
            }

            function b(e) {
                let t = (0, i().$t)(e);
                return r(300441).Q.isFail(t) ? [] : (0, o().Mu)(t.value)
            }
        },
        337663: (e, t, r) => {
            r.d(t, {
                PX: () => k,
                cZ: () => P,
                Ox: () => N,
                RE: () => I,
                Xs: () => C,
                YQ: () => A
            }), r(18107), r(944114), r(967357), r(898992), r(823215), r(672577), r(581454), r(737550);
            var n = () => r(975162),
                a = () => r(722371),
                o = () => r(496282),
                i = () => r(944897),
                s = () => r(416901);

            function u(e, t) {
                return "undefined" === e.type || t.some(t => (function e(t, r) {
                    if ("array" !== t.type)
                        if ("undefined" === t.type) return !0;
                        else return t.type === r.type;
                    return "array" === r.type && t.values.every(t => "array" === t.type ? e(t, r) : e(t, r.of))
                })(e, t))
            }
            r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(354520), r(430670);
            var l = r.n(r(598629)),
                p = () => r(297493),
                d = () => r(137938);

            function* y(e, t) {
                var n;
                let a = yield*(0, r(30192).Xq)(e);
                if (a) {
                    let e = yield {
                        recordPointers: a.getAdditionalPropertyPointers()
                    };
                    return {
                        collectionPointer: a.pointer,
                        schema: a.getNormalizedSchema(e.getRecordModel)
                    }
                }
                let o = e.getParentPointer();
                return o.table === r(46241).V && o.id === (null == (n = t.publicPageDataCollection) ? void 0 : n.id) ? {
                    collectionPointer: o,
                    schema: t.publicPageDataCollection.schema
                } : {
                    collectionPointer: void 0,
                    schema: void 0
                }
            }

            function* c(e) {
                var t, n, o, u;
                let {
                    block: l,
                    property: d,
                    parentCollectionPointer: y,
                    schema: m,
                    propertySchema: f,
                    oldContext: h,
                    evaluateAST: g
                } = e;
                if ("rollup" === f.type) {
                    let e = `${l.id}:${d}`;
                    if (h.visitedProperties.has(e)) throw new(i()).I3({
                        type: i().uW.CycleDetected,
                        errorSource: {
                            blockId: l.id,
                            collectionId: y.id,
                            propertyId: d
                        }
                    });
                    let o = new Set(h.visitedProperties);
                    o.add(e);
                    let u = (0, r(378675).wr)({
                        resultCache: h.resultCache,
                        blockId: l.id,
                        property: d
                    });
                    if (void 0 !== u) return u;
                    let v = { ...h,
                        visitedProperties: o,
                        depth: h.depth + 1
                    };
                    if (f.aggregation && "show_unique" !== f.aggregation) {
                        let e = yield*(0, r(30192).OH)(d, m), {
                            relation_property: n
                        } = f;
                        if (!(null != e && e.targetCollectionPointer) || !n) return {
                            type: "undefined"
                        };
                        let {
                            getRecordModel: a
                        } = yield {
                            collectionBlockProperties: [{
                                blockPointers: [l.pointer],
                                collectionPointer: y,
                                blockPropertyValuePointers: l.getAdditionalPropertyPointers(),
                                schema: m,
                                property: d
                            }]
                        }, o = (0, r(561872).n)(null == (t = l.getProperties(a)) ? void 0 : t[n]);
                        if (void 0 === o) return {
                            type: "undefined"
                        };
                        o.push(e.targetCollectionPointer), o.push(l.pointer);
                        let {
                            getRecordModel: s
                        } = yield {
                            recordPointers: o,
                            collectionBlockProperties: [{
                                blockPointers: [l.pointer],
                                collectionPointer: y,
                                blockPropertyValuePointers: l.getAdditionalPropertyPointers(),
                                schema: m,
                                property: d
                            }]
                        }, u = {
                            error: null
                        }, p = (0, r(26837).Pm)({
                            property: d,
                            schema: m,
                            block: l,
                            getRecordModel: s,
                            collectionRequestContext: { ...v,
                                userId: void 0,
                                getRelationEdgeList: v.getRelationEdgeList
                            },
                            formula2Error: u,
                            formulasModule: r(299512),
                            spaceIdCreator: h.spaceIdCreator
                        });
                        if (null !== u.error) {
                            if (!u.error.info.errorSource) throw new(i()).I3({ ...u.error.info,
                                errorSource: {
                                    blockId: l.id,
                                    collectionId: y.id,
                                    propertyId: d
                                }
                            });
                            throw u.error
                        }
                        if (void 0 === p) return {
                            type: "undefined"
                        };
                        let c = function(e) {
                            if (void 0 === e.value) return {
                                type: "undefined"
                            };
                            switch (e.type) {
                                case "text":
                                    return {
                                        type: "text",
                                        value: (0, r(247438).x9d)(e.value)
                                    };
                                case "number":
                                    return {
                                        type: "number",
                                        value: e.value
                                    };
                                case "date":
                                    return {
                                        type: "date",
                                        value: e.value
                                    }
                            }
                        }(p);
                        return (0, r(378675).wZ)({
                            resultCache: v.resultCache,
                            blockId: l.id,
                            property: d,
                            value: c
                        }), c
                    } {
                        let e = yield*(0, r(30192).OH)(d, m), {
                            relation_property: t
                        } = f;
                        if (void 0 === e || void 0 === t || "person" === e.rollupType) return {
                            type: "undefined"
                        };
                        let {
                            relationPropertySchema: o,
                            targetCollectionSchema: i,
                            targetCollectionModel: u,
                            targetProperty: x
                        } = e, {
                            getRecordModel: b
                        } = yield {
                            collectionBlockProperties: [{
                                blockPointers: [l.pointer],
                                collectionPointer: y,
                                blockPropertyValuePointers: l.getAdditionalPropertyPointers(),
                                schema: m,
                                property: d
                            }]
                        }, k = (0, r(561872).n)(null == (n = l.getProperties(b)) ? void 0 : n[t]), T = yield*(0, r(30192).Sp)(k, o);
                        if (0 === T.length) {
                            let e = {
                                type: "array",
                                values: []
                            };
                            return (0, r(378675).wZ)({
                                resultCache: v.resultCache,
                                blockId: l.id,
                                property: d,
                                value: e
                            }), e
                        }
                        let w = yield*(0, r(30192).KZ)(T.flatMap(e => {
                            let t = i[x];
                            return void 0 === t ? [] : (v.values = [{
                                kind: s().FormulaContextValueKind.ThisRow,
                                value: {
                                    type: "block",
                                    value: e.pointer
                                }
                            }], [c({
                                block: e,
                                property: x,
                                parentCollectionPointer: u.pointer,
                                schema: i,
                                propertySchema: t,
                                oldContext: v,
                                evaluateAST: g
                            })])
                        })), M = (0, p().U)({
                            type: "array",
                            values: w
                        });
                        if (M.values.length && "show_unique" === f.aggregation) {
                            let e = (0, r(378675).wr)({
                                resultCache: h.resultCache,
                                blockId: l.id,
                                property: d
                            });
                            if (void 0 !== e) return e;
                            k.push(l.pointer);
                            let t = M.values.map(e => "block" === e.type ? e.value : void 0).filter(a().O9);
                            k.push(...t);
                            let {
                                getRecordModel: n
                            } = yield {
                                recordPointers: k
                            }, {
                                getRecordModel: o
                            } = yield {
                                recordPointers: t.map(e => n(e)).filter(a().O9).flatMap(e => (0, r(561872).dg)(e.getNonCollectionProperty("title")))
                            }, i = r(993189).b4_.tryUntilFound(n, o), s = {
                                type: "array",
                                values: r(381453).hS(M.values, e => (0, r(829035).R2)({
                                    result: e,
                                    getRecordModel: i,
                                    userTimeZone: v.userTimeZone,
                                    intl: v.intl
                                }))
                            };
                            return (0, r(378675).wZ)({
                                resultCache: v.resultCache,
                                blockId: l.id,
                                property: d,
                                value: s
                            }), s
                        }
                        let N = {
                            type: "array",
                            values: M.values
                        };
                        return (0, r(378675).wZ)({
                            resultCache: v.resultCache,
                            blockId: l.id,
                            property: d,
                            value: N
                        }), N
                    }
                }
                if ("formula" === f.type) {
                    let e = `${l.id}:${d}`;
                    if (h.visitedProperties.has(e)) throw new(i()).I3({
                        type: i().uW.CycleDetected,
                        errorSource: {
                            blockId: l.id,
                            collectionId: y.id,
                            propertyId: d
                        }
                    });
                    let t = new Set(h.visitedProperties);
                    if ((0, r(537664).F)(f)) {
                        t.add(e);
                        let n = (0, r(378675).wr)({
                            resultCache: h.resultCache,
                            blockId: l.id,
                            property: d
                        });
                        if (void 0 !== n) return n
                    }
                    let n = { ...h,
                        visitedProperties: t,
                        depth: h.depth + 1
                    };
                    if (void 0 === f.version) {
                        let {
                            getRecordModel: e
                        } = yield {
                            collectionBlockProperties: [{
                                blockPointers: [l.pointer],
                                collectionPointer: y,
                                blockPropertyValuePointers: l.getAdditionalPropertyPointers(),
                                schema: m,
                                property: d
                            }]
                        }, t = {
                            error: null
                        }, a = (0, r(408343).L7)({
                            schema: m,
                            property: d,
                            block: l,
                            getRecordModel: e,
                            collectionRequestContext: {
                                userId: void 0,
                                userTimeZone: n.userTimeZone,
                                intl: n.intl,
                                depth: n.depth,
                                resultCache: n.resultCache,
                                regExpCache: n.regExpCache,
                                formatDateCache: n.formatDateCache,
                                logFormulaTimeoutFn: n.logFormulaTimeoutFn,
                                logUnsafeRegexFn: n.logUnsafeRegexFn,
                                visitedProperties: n.visitedProperties,
                                experimentService: n.experimentService,
                                collectionFeatureGates: n.collectionFeatureGates,
                                getRelationEdgeList: n.getRelationEdgeList
                            },
                            formula2Error: t,
                            spaceIdCreator: h.spaceIdCreator
                        });
                        if (null !== t.error) {
                            if (!t.error.info.errorSource) throw new(i()).I3({ ...t.error.info,
                                errorSource: {
                                    blockId: l.id,
                                    collectionId: y.id,
                                    propertyId: d
                                }
                            });
                            throw t.error
                        }
                        switch (typeof a) {
                            case "string":
                                return {
                                    type: "text",
                                    value: (0, r(247438).x9d)(a)
                                };
                            case "number":
                                return {
                                    type: "number",
                                    value: a
                                };
                            case "boolean":
                                return {
                                    type: "checkbox",
                                    value: a
                                };
                            case "object":
                                return {
                                    type: "date",
                                    value: a
                                };
                            default:
                                return {
                                    type: "undefined"
                                }
                        }
                    } {
                        let e = null == (o = f.formula2) ? void 0 : o.code;
                        if (!e) return {
                            type: "undefined"
                        };
                        let t = (0, r(378675).wr)({
                            resultCache: n.resultCache,
                            blockId: l.id,
                            property: d
                        });
                        if (void 0 !== t) return t;
                        let a = (0, r(807381).$t)(e);
                        if (r(300441).Q.isFail(a))
                            if (!n.throwOnDownstreamParseFailures) return {
                                type: "undefined"
                            };
                            else throw new(i()).I3({
                                type: i().uW.DownstreamParseFailure,
                                parserError: a.error,
                                collectionId: y.id,
                                property: d,
                                errorSource: {
                                    blockId: l.id,
                                    collectionId: y.id,
                                    propertyId: d
                                }
                            });
                        n.values = [{
                            kind: s().FormulaContextValueKind.ThisRow,
                            value: {
                                type: "block",
                                value: l.pointer
                            }
                        }];
                        try {
                            let e = yield* g(a.value, n);
                            return (0, r(378675).wZ)({
                                resultCache: n.resultCache,
                                blockId: l.id,
                                property: d,
                                value: e
                            }), e
                        } catch (e) {
                            if (e instanceof i().I3 && !e.info.errorSource) throw new(i()).I3({ ...e.info,
                                errorSource: {
                                    blockId: l.id,
                                    collectionId: y.id,
                                    propertyId: d
                                }
                            });
                            throw e
                        }
                    }
                }
                if ((0, a().Xk)(s().FormulaTokenSupportedBlockSystemPropertyList, f.type)) return (0, p().ve)(l, f.type);
                let v = (0, r(561872).xr)({
                        block: l,
                        propertyId: d,
                        parentCollectionSchema: m,
                        getRecordModel: r(993189).b4_.constant(void 0)
                    }),
                    x = yield {
                        recordPointers: [y, ...null != v && v.eoipPointer ? [v.eoipPointer] : []]
                    },
                    b = l.getProperty(d, x.getRecordModel);
                if ("status" === f.type) {
                    let e = (0, r(561872).RZ)(b, f);
                    return void 0 === e ? {
                        type: "undefined"
                    } : {
                        type: "text",
                        value: (0, r(247438).x9d)(e)
                    }
                }
                if ("checkbox" === f.type && void 0 === b) return {
                    type: "checkbox",
                    value: !1
                };
                if (("relation" === f.type || "multi_select" === f.type) && void 0 === b) return {
                    type: "array",
                    values: []
                };
                if ("person" === f.type && void 0 === b) {
                    let e = l.getCreatedByPointer();
                    return "created_by" === f.default && void 0 !== e && (0, r(197018).Pu)(e) ? {
                        type: "array",
                        values: [{
                            type: "person",
                            value: e
                        }]
                    } : {
                        type: "array",
                        values: []
                    }
                }
                if (void 0 === b) return {
                    type: "undefined"
                };
                switch (f.type) {
                    case "title":
                    case "text":
                    case "url":
                    case "email":
                    case "place":
                        return {
                            type: "text",
                            value: b
                        };
                    case "phone_number":
                        return {
                            type: "text",
                            value: (0, r(247438).x9d)((0, r(247438).k4p)(b))
                        };
                    case "select":
                        {
                            let e = (0, r(561872).L3)(b, f.options ? ? []);
                            if (void 0 === e) return {
                                type: "undefined"
                            };
                            return {
                                type: "text",
                                value: (0, r(247438).x9d)(e)
                            }
                        }
                    case "multi_select":
                        return {
                            type: "array",
                            values: (0, r(561872).o2)(b, f.options ? ? []).map(e => ({
                                type: "text",
                                value: (0, r(247438).x9d)(e)
                            }))
                        };
                    case "checkbox":
                        return {
                            type: "checkbox",
                            value: (0, r(896216).w)(b)
                        };
                    case "date":
                        {
                            let e = (0, r(179358).b)(b);
                            if (void 0 === e) return {
                                type: "undefined"
                            };
                            return {
                                type: "date",
                                value: e
                            }
                        }
                    case "person":
                        return {
                            type: "array",
                            values: (0, r(465256).e)({
                                textValue: b,
                                propertySchema: f,
                                blockCreatorPointer: void 0
                            }).map(e => ({
                                type: "person",
                                value: e
                            }))
                        };
                    case "relation":
                        {
                            let e = (0, r(781765).N6)({
                                getRelationEdgeList: h.getRelationEdgeList,
                                sourceCollectionId: y.id,
                                relationPropertySchema: f,
                                relationPropertyId: d,
                                block: l,
                                featureGateEnabled: h.collectionFeatureGates.edge_formulas
                            }) ? ? (0, r(561872).n)(b);
                            return {
                                type: "array",
                                values: (yield*(0, r(30192).Sp)(e, f)).map(e => ({
                                    type: "block",
                                    value: {
                                        table: r(682956).ev,
                                        id: e.id,
                                        spaceId: e.getSpaceId()
                                    }
                                }))
                            }
                        }
                    case "number":
                        let k = (0, r(588688).M)(b);
                        return "number" == typeof k ? {
                            type: "number",
                            value: k
                        } : {
                            type: "undefined"
                        };
                    case "auto_increment_id":
                        {
                            let e = yield*(0, r(30192).Xq)(l);
                            if (!e) return {
                                type: "undefined"
                            };
                            let t = (0, r(288338).a)({
                                    spaceId: l.getSpaceId(),
                                    parentTable: r(46241).V,
                                    parentId: e.id
                                }),
                                {
                                    getRecordModel: n
                                } = yield {
                                    recordPointers: [t]
                                },
                                a = null == (u = n(t)) ? void 0 : u.getRecordKey(),
                                o = (0, r(588688).M)(b),
                                i = (0, r(154326).H4)(a, o);
                            return void 0 !== i ? {
                                type: "text",
                                value: [
                                    [i]
                                ]
                            } : {
                                type: "undefined"
                            }
                        }
                    case "file":
                        return {
                            type: "array",
                            values: (0, r(561872).pJ)(b, f).map(({
                                url: e
                            }) => ({
                                type: "text",
                                value: (0, r(247438).x9d)(e)
                            }))
                        };
                    case "created_time":
                    case "last_edited_time":
                    case "created_by":
                    case "last_edited_by":
                    case "last_visited_time":
                    case "button":
                    case "location":
                    case "verification":
                        return {
                            type: "undefined"
                        };
                    default:
                        (0, a().HB)(f)
                }
            }

            function m(e) {
                return "number" === e.type ? {
                    type: "number",
                    value: (0, r(381453).LI)(e.value, 12)
                } : "array" === e.type ? {
                    type: "array",
                    values: e.values.map(e => "number" === e.type ? {
                        type: "number",
                        value: (0, r(381453).LI)(e.value, 12)
                    } : e)
                } : e
            }

            function f(e, t, r) {
                if ("number" !== t.type && "undefined" !== t.type) throw new(i()).I3({
                    type: i().uW.CannotDoMathOnType,
                    op: r,
                    operand: e,
                    valueType: t.type
                })
            }

            function h(e, t) {
                try {
                    return {
                        value: t()
                    }
                } catch (t) {
                    return {
                        error: v(e, t)
                    }
                }
            }
            async function g(e, t) {
                try {
                    return await t()
                } catch (t) {
                    if (t instanceof i().FormulaDependencyLimitError)
                        if ("per_formula" === t.limitType) throw new(i()).I3({
                            type: i().uW.PerFormulaDependencyLimitExceeded,
                            perFormulaLoaded: t.loaded,
                            limit: t.limit
                        });
                        else throw new(i()).I3({
                            type: i().uW.TotalDependencyLimitExceeded,
                            totalLoaded: t.loaded,
                            limit: t.limit
                        });
                    return {
                        error: v(e, t)
                    }
                }
            }

            function v(e, t) {
                if (t instanceof i().I3) {
                    let n = t.info;
                    return e && (0, p().li)(n) ? { ...n,
                        node: (0, r(301040).TW)(n.node, e)
                    } : n
                }
                return {
                    type: i().uW.UnexpectedError,
                    error: (0, r(161179).A)(t)
                }
            }
            let x = new WeakMap;

            function b(e, t) {
                let r = x.get(t);
                if (r) return r;
                let n = T(e, t);
                return x.set(t, n), n
            }

            function k(e, t) {
                return h(void 0, () => b(e, t))
            }

            function T(e, t) {
                switch (t.kind) {
                    case i().NM.Number:
                        return [{
                            type: "loadConstant",
                            node: t,
                            value: {
                                type: "number",
                                value: parseFloat(t.text)
                            }
                        }];
                    case i().NM.String:
                        return [{
                            type: "loadConstant",
                            node: t,
                            value: {
                                type: "text",
                                value: [
                                    [t.text]
                                ]
                            }
                        }];
                    case i().NM.Boolean:
                        return [{
                            type: "loadConstant",
                            node: t,
                            value: {
                                type: "checkbox",
                                value: "true" === t.text.toLowerCase()
                            }
                        }];
                    case i().NM.NotionToken:
                        {
                            let e = t.token;
                            switch (e.type) {
                                case s().FormulaTokenType.Checkbox:
                                    return [{
                                        type: "loadConstant",
                                        node: t,
                                        value: {
                                            type: "checkbox",
                                            value: e.checked
                                        }
                                    }];
                                case s().FormulaTokenType.BlockProperty:
                                    return [{
                                        type: "loadToken",
                                        node: t,
                                        token: e
                                    }];
                                case s().FormulaTokenType.Block:
                                    return [{
                                        type: "loadConstant",
                                        node: t,
                                        value: {
                                            type: "block",
                                            value: {
                                                table: r(682956).ev,
                                                id: e.blockId,
                                                spaceId: e.spaceId
                                            }
                                        }
                                    }];
                                case s().FormulaTokenType.ContextValue:
                                    return [{
                                        type: "loadToken",
                                        node: t,
                                        token: e
                                    }];
                                case s().FormulaTokenType.Date:
                                    return [{
                                        type: "loadConstant",
                                        node: t,
                                        value: {
                                            type: "date",
                                            value: e.date
                                        }
                                    }];
                                case s().FormulaTokenType.Person:
                                    {
                                        let n = e.personInfo;
                                        if ("user" === n.personTokenType) return [{
                                            type: "loadConstant",
                                            node: t,
                                            value: {
                                                type: "person",
                                                value: {
                                                    table: r(514214).oo,
                                                    id: n.userId
                                                }
                                            }
                                        }];
                                        if ("group" === n.personTokenType) return [{
                                            type: "loadConstant",
                                            node: t,
                                            value: {
                                                type: "person",
                                                value: {
                                                    table: r(659341).n,
                                                    id: n.groupId,
                                                    spaceId: n.spaceId
                                                }
                                            }
                                        }];
                                        return (0, a().HB)(n)
                                    }
                                default:
                                    return (0, a().HB)(e)
                            }
                        }
                    case i().NM.Additive:
                        return [...T(e, t.rhs), ...T(e, t.lhs), {
                            type: "add",
                            node: t
                        }];
                    case i().NM.Multiplicative:
                        return [...T(e, t.rhs), ...T(e, t.lhs), {
                            type: "multiply",
                            node: t
                        }];
                    case i().NM.Equality:
                        return [...T(e, t.rhs), ...T(e, t.lhs), {
                            type: "equality",
                            node: t
                        }];
                    case i().NM.Relational:
                        return [...T(e, t.rhs), ...T(e, t.lhs), {
                            type: "relational",
                            node: t
                        }];
                    case i().NM.Exponentiation:
                        return [...T(e, t.rhs), ...T(e, t.lhs), {
                            type: "exponentiation",
                            node: t
                        }];
                    case i().NM.Unary:
                        return [...T(e, t.expression), {
                            type: "unary",
                            node: t
                        }];
                    case i().NM.Array:
                        {
                            let r = [];
                            for (let n of t.elements.slice().reverse()) r.push(...T(e, n));
                            return r.push({
                                type: "makeArray",
                                node: t,
                                numberOfElements: t.elements.length
                            }),
                            r
                        }
                    case i().NM.LogicalAnd:
                        {
                            let r = [];
                            for (let n of t.elements.slice().reverse()) r.push(...T(e, n));
                            return r.push({
                                type: "logicalAnd",
                                node: t,
                                numberOfArguments: t.elements.length
                            }),
                            r
                        }
                    case i().NM.LogicalOr:
                        {
                            let r = [];
                            for (let n of t.elements.slice().reverse()) r.push(...T(e, n));
                            return r.push({
                                type: "logicalOr",
                                node: t,
                                numberOfArguments: t.elements.length
                            }),
                            r
                        }
                    case i().NM.Call:
                        return function(e, t) {
                            let r, n, o = [];
                            if (t.expression.kind === i().NM.Identifier) {
                                if (!d().LP.hasOwnProperty(t.expression.text)) throw new(i()).I3({
                                    type: i().uW.IdentifierNotFound,
                                    node: t.expression
                                });
                                r = t.expression.text, n = t.arguments
                            } else if (t.expression.kind === i().NM.UnifiedFunctionProperty) {
                                if (!d().LP.hasOwnProperty(t.expression.name)) throw new(i()).I3({
                                    type: i().uW.UnifiedFunctionPropertyNotFound,
                                    node: t.expression
                                });
                                r = t.expression.name, n = [t.expression.expression, ...t.arguments]
                            } else throw new(i()).I3({
                                type: i().uW.CannotCallNonFunction,
                                node: t,
                                calleeType: function(e) {
                                    if (e.kind === i().NM.Boolean || e.kind === i().NM.LogicalAnd || e.kind === i().NM.LogicalOr || e.kind === i().NM.Relational || e.kind === i().NM.Equality) return "checkbox";
                                    if (e.kind === i().NM.Number || e.kind === i().NM.Additive || e.kind === i().NM.Exponentiation || e.kind === i().NM.Multiplicative) return "number";
                                    if (e.kind === i().NM.String) return "text";
                                    if (e.kind === i().NM.Array) return "array";
                                    if (e.kind === i().NM.Unary)
                                        if ("-" === e.op) return "number";
                                        else {
                                            if ("!" === e.op || "not" === e.op) return "checkbox";
                                            (0, a().HB)(e.op)
                                        }
                                    else {
                                        if (e.kind === i().NM.Call || e.kind === i().NM.Conditional || e.kind === i().NM.Identifier || e.kind === i().NM.MemberBlockProperty || e.kind === i().NM.NotionToken || e.kind === i().NM.UnifiedFunctionProperty || e.kind === i().NM.RecoveryNode) return "undefined";
                                        (0, a().HB)(e)
                                    }
                                }(t.expression)
                            });
                            if ("let" === r || "lets" === r) return function(e, t, r, n) {
                                if (n.length < 3 || n.length % 2 != 1) throw new(i()).x4({
                                    type: i().v3.NotEnoughArguments
                                }).toFormulaEvaluatorError(r, d().LP[t]);
                                for (let e = 0; e < (n.length - 1) / 2; e++) {
                                    let a = n[2 * e];
                                    if (a.kind !== i().NM.Identifier) throw new(i()).x4({
                                        type: i().v3.LetBindingNameNotIdentifier,
                                        node: a
                                    }).toFormulaEvaluatorError(r, d().LP[t])
                                }
                                let a = [];
                                for (let o = 0; o < (n.length - 1) / 2; o++) {
                                    let s, u = n[2 * o],
                                        l = n[2 * o + 1];
                                    if (u.kind !== i().NM.Identifier) throw new(i()).x4({
                                        type: i().v3.LetBindingNameNotIdentifier,
                                        node: u
                                    }).toFormulaEvaluatorError(r, d().LP[t]);
                                    try {
                                        s = T(e, l)
                                    } catch (e) {
                                        R(e), s = [{
                                            type: "loadConstant",
                                            node: l,
                                            value: {
                                                type: "undefined"
                                            }
                                        }]
                                    }
                                    a.push([u.text, s])
                                }
                                return [{
                                    type: "runLets",
                                    node: r,
                                    body: T(e, n.at(-1)),
                                    bindings: a
                                }]
                            }(e, r, t, n);
                            if ("if" === r || "ifs" === r) return w(e, r, t, n);
                            if (e.disabledFunctions.includes(r))
                                if (t.expression.kind === i().NM.Identifier) throw new(i()).I3({
                                    type: i().uW.IdentifierNotFound,
                                    node: t.expression
                                });
                                else throw new(i()).I3({
                                    type: i().uW.UnifiedFunctionPropertyNotFound,
                                    node: t.expression
                                });
                            let s = d().LP[r],
                                u = (0, p().ab)(s);
                            if (n.length < u) throw new(i()).I3({
                                type: i().uW.FunctionCallTooFewArguments,
                                node: t,
                                libraryFunction: s,
                                numArguments: n.length
                            });
                            return o.push(...n.map((r, n) => {
                                let a = (0, p().Pf)(s, n);
                                if (void 0 === a) throw new(i()).I3({
                                    type: i().uW.FunctionCallUnexpectedArgument,
                                    node: t,
                                    argument: r,
                                    libraryFunction: s,
                                    parameterIndex: n
                                });
                                return Array.isArray(a.type) || "expression" !== a.type.type ? T(e, r) : [{
                                    type: "loadConstant",
                                    node: r,
                                    value: {
                                        type: "compiledCode",
                                        instructions: T(e, r)
                                    }
                                }]
                            }).reverse().flat()), o.push({
                                type: "callLibraryFunction",
                                node: t,
                                libraryFunction: s,
                                numberOfArguments: n.length,
                                argumentNodes: n
                            }), o
                        }(e, t);
                    case i().NM.Identifier:
                        return [{
                            type: "loadName",
                            node: t,
                            name: t.text
                        }];
                    case i().NM.Conditional:
                        return w(e, "if", t, [t.condition, t.expIfTrue, (0, r(194943).o)(t.expIfFalse)]);
                    case i().NM.UnifiedFunctionProperty:
                        throw new(r(194943)).V("UnifiedFunctionProperty node should be wrapped in a Call node.");
                    case i().NM.RecoveryNode:
                        throw new(i()).I3({
                            type: i().uW.UnexpectedRecoveryNode,
                            recovery: t
                        });
                    case i().NM.MemberBlockProperty:
                        return [...T(e, t.expression), {
                            type: "loadMemberBlockProperty",
                            node: t,
                            propertyToken: t.propertyToken
                        }];
                    default:
                        (0, a().HB)(t)
                }
            }

            function w(e, t, n, a) {
                if (a.length < ("if" === t ? 3 : 2)) throw new(i()).I3({
                    type: i().uW.FunctionCallTooFewArguments,
                    node: n,
                    libraryFunction: d().LP[t],
                    numArguments: a.length
                });
                if ("if" === t && 3 !== a.length) {
                    let e = a.at(-1);
                    throw new(i()).I3({
                        type: i().uW.FunctionCallUnexpectedArgument,
                        node: n,
                        argument: e,
                        libraryFunction: d().LP[t],
                        parameterIndex: a.length - 1
                    })
                }
                return function t(a) {
                    let o;
                    a = [...a];
                    let i = [];
                    i.push(...T(e, (0, r(194943).o)(a.shift())));
                    let s = T(e, (0, r(194943).o)(a.shift()));
                    return o = 1 === a.length ? T(e, (0, r(194943).o)(a.shift())) : 0 === a.length ? [{
                        node: n,
                        type: "loadConstant",
                        value: {
                            type: "undefined"
                        }
                    }] : t(a), i.push({
                        node: n,
                        type: "relativeJumpIfTrue",
                        offset: o.length + 1
                    }), i.push(...o), i.push({
                        node: n,
                        type: "relativeJump",
                        offset: s.length
                    }), i.push(...s), i
                }(a)
            }
            class M {
                underlying = [];
                push(e) {
                    this.underlying.push(e)
                }
                popValueOrCode() {
                    return (0, r(194943).o)(this.underlying.pop())
                }
                popValue() {
                    var e = this.popValueOrCode();
                    if ("compiledCode" === e.type) throw new(r(194943)).V("unexpected compiled code");
                    return e
                }
            }

            function N(e) {
                var t;
                return {
                    disabledFunctions: (null == (t = e.collectionFeatureGates) ? void 0 : t.formulas_disabled_functions) ? ? []
                }
            }

            function E(e, t) {
                return I(b(N(t), e), t)
            }

            function* I(e, t) {
                let n = new M,
                    u = 0;
                for (; u < e.length;) {
                    var m, h, g, v;
                    let x = e[u];
                    if (u++, "loadConstant" === x.type) n.push(x.value);
                    else if ("add" === x.type) {
                        let {
                            node: e
                        } = x, t = n.popValue(), a = n.popValue();
                        n.push(function(e, t, n) {
                            if ("undefined" === t.type && "undefined" === n.type) return {
                                type: "number",
                                value: 0
                            };
                            switch ("undefined" === t.type && "number" === n.type ? t = {
                                type: "number",
                                value: 0
                            } : "undefined" === n.type && "number" === t.type && (n = {
                                type: "number",
                                value: 0
                            }), e.op) {
                                case "+":
                                    if ("number" === t.type && "number" === n.type) {
                                        if (!Number.isInteger(t.value) || !Number.isInteger(n.value)) return {
                                            type: "number",
                                            value: new(l())(t.value).add(n.value).toNumber()
                                        };
                                        return {
                                            type: "number",
                                            value: t.value + n.value
                                        }
                                    }
                                    return {
                                        type: "text",
                                        value: (0, r(247438).__s)((0, p().Ht)(t).concat((0, p().Ht)(n)))
                                    };
                                case "-":
                                    if (f(e.lhs, t, e.op), f(e.rhs, n, e.op), "number" === t.type && "number" === n.type) {
                                        if (!Number.isInteger(t.value) || !Number.isInteger(n.value)) return {
                                            type: "number",
                                            value: new(l())(t.value).minus(n.value).toNumber()
                                        };
                                        return {
                                            type: "number",
                                            value: t.value - n.value
                                        }
                                    }
                            }
                            return {
                                type: "undefined"
                            }
                        }(e, t, a))
                    } else if ("multiply" === x.type) {
                        let {
                            node: e
                        } = x, t = n.popValue(), r = n.popValue();
                        n.push(function(e, t, r) {
                            if (f(e.lhs, t, e.op), f(e.rhs, r, e.op), "undefined" === t.type && "undefined" === r.type) return {
                                type: "number",
                                value: 0
                            };
                            switch ("undefined" === t.type && "number" === r.type ? t = {
                                type: "number",
                                value: 0
                            } : "undefined" === r.type && "number" === t.type && (r = {
                                type: "number",
                                value: 0
                            }), e.op) {
                                case "*":
                                    if ("number" === t.type && "number" === r.type) {
                                        if (!Number.isInteger(t.value) || !Number.isInteger(r.value)) return {
                                            type: "number",
                                            value: new(l())(t.value).mul(r.value).toNumber()
                                        };
                                        return {
                                            type: "number",
                                            value: t.value * r.value
                                        }
                                    }
                                    break;
                                case "/":
                                    if ("number" === t.type && "number" === r.type) {
                                        if (0 === r.value) return {
                                            type: "undefined"
                                        };
                                        return {
                                            type: "number",
                                            value: new(l())(t.value).div(r.value).toNumber()
                                        }
                                    }
                                    break;
                                case "%":
                                    if ("number" === t.type && "number" === r.type) {
                                        if (0 === r.value) return {
                                            type: "undefined"
                                        };
                                        if (!Number.isInteger(r.value)) return {
                                            type: "number",
                                            value: new(l())(t.value).mod(r.value).toNumber()
                                        };
                                        return {
                                            type: "number",
                                            value: t.value % r.value
                                        }
                                    }
                            }
                            return {
                                type: "undefined"
                            }
                        }(e, t, r))
                    } else if ("equality" === x.type) {
                        let {
                            node: e
                        } = x, r = n.popValue(), o = n.popValue(), i = yield*(0, p().zV)(r, o, t), s = e.op;
                        "==" === s ? n.push({
                            type: "checkbox",
                            value: i
                        }) : "!=" === s ? n.push({
                            type: "checkbox",
                            value: !i
                        }) : (0, a().HB)(s)
                    } else if ("logicalAnd" === x.type) {
                        let e = [];
                        for (let t = 0; t < x.numberOfArguments; t++) e.push(n.popValue());
                        let t = e.map(p().CL);
                        n.push({
                            type: "checkbox",
                            value: t.every(e => e)
                        })
                    } else if ("logicalOr" === x.type) {
                        let e = [];
                        for (let t = 0; t < x.numberOfArguments; t++) e.push(n.popValue());
                        let t = e.map(p().CL);
                        n.push({
                            type: "checkbox",
                            value: t.some(e => e)
                        })
                    } else if ("makeArray" === x.type) {
                        let e = [];
                        for (let t = 0; t < x.numberOfElements; t++) e.push(n.popValue());
                        n.push({
                            type: "array",
                            values: e
                        })
                    } else if ("relational" === x.type) {
                        let {
                            node: e
                        } = x, r = n.popValue(), a = n.popValue();
                        n.push((yield* function*(e, t, r, n) {
                            if ("undefined" === t.type || "undefined" === r.type) return {
                                type: "checkbox",
                                value: !1
                            };
                            if ("date" === t.type && "date" === r.type) {
                                let a = (0, p().i3)(t.value, r.value, n.userTimeZone);
                                switch (e.op) {
                                    case "<":
                                        return {
                                            type: "checkbox",
                                            value: a < 0
                                        };
                                    case "<=":
                                        return {
                                            type: "checkbox",
                                            value: a <= 0
                                        };
                                    case ">":
                                        return {
                                            type: "checkbox",
                                            value: a > 0
                                        };
                                    case ">=":
                                        return {
                                            type: "checkbox",
                                            value: a >= 0
                                        }
                                }
                            }
                            if ("text" === t.type && "text" === r.type) {
                                let [a, o] = yield*(0, p().h8)([t.value, r.value], n);
                                switch (e.op) {
                                    case "<":
                                        return {
                                            type: "checkbox",
                                            value: a < o
                                        };
                                    case "<=":
                                        return {
                                            type: "checkbox",
                                            value: a <= o
                                        };
                                    case ">":
                                        return {
                                            type: "checkbox",
                                            value: a > o
                                        };
                                    case ">=":
                                        return {
                                            type: "checkbox",
                                            value: a >= o
                                        }
                                }
                            }
                            if ("number" === t.type && "number" === r.type || "checkbox" === t.type && "checkbox" === r.type) switch (e.op) {
                                case "<":
                                    return {
                                        type: "checkbox",
                                        value: t.value < r.value
                                    };
                                case "<=":
                                    return {
                                        type: "checkbox",
                                        value: t.value <= r.value
                                    };
                                case ">":
                                    return {
                                        type: "checkbox",
                                        value: t.value > r.value
                                    };
                                case ">=":
                                    return {
                                        type: "checkbox",
                                        value: t.value >= r.value
                                    }
                            }
                            throw new(i()).I3({
                                type: i().uW.CannotRelativelyCompareTypes,
                                lhs: e.lhs,
                                rhs: e.rhs,
                                lhsType: t.type,
                                rhsType: r.type
                            })
                        }(e, r, a, t)))
                    } else if ("exponentiation" === x.type) {
                        let {
                            node: e
                        } = x, t = n.popValue(), r = n.popValue();
                        n.push((m = e, h = t, g = r, (f(m.lhs, h, m.op), f(m.rhs, g, m.op), "^" === m.op && "number" === h.type && "number" === g.type) ? !Number.isInteger(h.value) && Number.isInteger(g.value) ? {
                            type: "number",
                            value: new(l())(h.value).pow(g.value).toNumber()
                        } : {
                            type: "number",
                            value: h.value ** g.value
                        } : {
                            type: "undefined"
                        }))
                    } else if ("unary" === x.type) {
                        let {
                            node: e
                        } = x, t = n.popValue();
                        n.push(function(e, t) {
                            let r = e.op;
                            switch (r) {
                                case "-":
                                    if ("number" !== t.type) throw new(i()).I3({
                                        type: i().uW.UnaryMinusOnNonNumber,
                                        node: e.expression,
                                        expressionType: t.type
                                    });
                                    return {
                                        type: "number",
                                        value: -t.value
                                    };
                                case "!":
                                case "not":
                                    return {
                                        type: "checkbox",
                                        value: !(0, p().CL)(t)
                                    };
                                default:
                                    return (0, a().HB)(r)
                            }
                        }(e, t))
                    } else if ("callLibraryFunction" === x.type) {
                        let {
                            libraryFunction: e
                        } = x, r = [];
                        for (let t = 0; t < x.numberOfArguments; t++) {
                            let o = n.popValueOrCode();
                            if ("compiledCode" !== o.type) {
                                let r = (0, p().Pf)(e, t);
                                (0, a().O9)(r) && (o = function(e) {
                                    let {
                                        value: t,
                                        callNode: r,
                                        argumentNode: n,
                                        parameterIndex: a,
                                        libraryFunction: o,
                                        expectedParameter: u
                                    } = e;
                                    if (!(0, p().Hz)(t, u.type)) {
                                        if (Array.isArray(u.type) ? u.type.some(e => "checkbox" === e.type) : "checkbox" === u.type.type) return {
                                            type: "checkbox",
                                            value: (0, p().CL)(t)
                                        };
                                        if (Array.isArray(u.type) ? u.type.some(e => "text" === e.type) : "expression" !== u.type.type && "text" === (0, p().JK)(u.type).type) return "array" === t.type && (Array.isArray(u.type) ? u.type.some(e => "array" === e.type) : "array" === u.type.type) ? {
                                            type: "array",
                                            values: t.values.map(e => ({
                                                type: "text",
                                                value: (0, p().Ht)(e)
                                            }))
                                        } : "array" === t.type && 0 === t.values.length ? {
                                            type: "text",
                                            value: [
                                                [""]
                                            ]
                                        } : {
                                            type: "text",
                                            value: (0, p().Ht)(t)
                                        };
                                        if (!s().TREAT_UNDEFINED_AS_ZERO_FNS.includes(o.name) && !s().FLATTENS_NUMBER_ARRAY_FNS.includes(o.name)) throw new(i()).I3({
                                            type: i().uW.FunctionCallArgumentWrongType,
                                            node: r,
                                            argument: n,
                                            libraryFunction: o,
                                            parameterIndex: a,
                                            argumentType: t.type
                                        })
                                    }
                                    return t
                                }({
                                    value: o,
                                    callNode: x.node,
                                    argumentNode: x.argumentNodes[t],
                                    parameterIndex: t,
                                    libraryFunction: e,
                                    expectedParameter: r
                                }))
                            }
                            r.push(o)
                        }
                        try {
                            n.push((yield* e.eval(r, t)))
                        } catch (t) {
                            if (t instanceof i().I3) throw t;
                            throw new(i()).I3({
                                type: i().uW.LibraryFunctionExecutionError,
                                node: x.node,
                                libraryFunction: e,
                                error: t
                            })
                        }
                    } else if ("loadToken" === x.type) {
                        let {
                            node: e,
                            token: u
                        } = x;
                        u.type === s().FormulaTokenType.BlockProperty ? n.push((yield* function*(e) {
                            let {
                                node: t,
                                token: n,
                                context: a,
                                evaluateAST: u
                            } = e;
                            if ((0, p().ix)(n)) return yield* function*(e) {
                                let {
                                    node: t,
                                    token: n,
                                    context: a,
                                    evaluateAST: o
                                } = e, u = a.values.find(e => e.kind === s().FormulaContextValueKind.ContextValue && e.id === (0, p().GH)(n.contextValueId));
                                if (void 0 === u) throw new(i()).I3({
                                    type: i().uW.MissingContextVariable,
                                    node: t,
                                    valueId: n.contextValueId
                                });
                                if ("block" !== u.value.type) throw new(i()).I3({
                                    type: i().uW.ContextVariableWrongType,
                                    node: t,
                                    valueId: n.contextValueId,
                                    expectedType: "block",
                                    resultType: u.value.type
                                });
                                let l = u.value.value,
                                    d = (yield {
                                        recordPointers: [l]
                                    }).getRecordModel(l);
                                if (void 0 === d) throw new(i()).I3({
                                    type: i().uW.MissingDataDependencyBlock,
                                    node: t,
                                    blockPointer: l
                                });
                                let m = (0, p().Yi)(n.property),
                                    {
                                        collectionPointer: f,
                                        schema: h
                                    } = yield* y(d, a);
                                if (!f) {
                                    if (r(511791).PJ(m)) return (0, p().ve)(d, m);
                                    throw new(i()).I3({
                                        type: i().uW.MissingDataDependencyBlock,
                                        node: t,
                                        blockPointer: d.pointer
                                    })
                                }
                                if (r(511791).PJ(m)) return (0, p().ve)(d, m);
                                let g = null == h ? void 0 : h[m];
                                if (void 0 === g || void 0 === h) throw new(i()).I3({
                                    type: i().uW.MissingSchemaPropertyOnCollection,
                                    node: t,
                                    collectionId: d.getParentId(),
                                    property: m
                                });
                                return yield* c({
                                    block: d,
                                    parentCollectionPointer: f,
                                    property: m,
                                    schema: h,
                                    propertySchema: g,
                                    oldContext: a,
                                    evaluateAST: o
                                })
                            }({ ...e,
                                token: n
                            });
                            let l = a.values.find(e => e.kind === s().FormulaContextValueKind.ThisRow);
                            if ((null == l ? void 0 : l.value.type) !== "block") throw new(i()).I3({
                                type: i().uW.MissingThisRow,
                                node: t
                            });
                            let d = l.value.value,
                                m = (yield {
                                    recordPointers: [d]
                                }).getRecordModel(d);
                            if (void 0 === m) throw new(i()).I3({
                                type: i().uW.MissingThisRow,
                                node: t
                            });
                            if (void 0 === n.collection) return (0, p().ve)(m, n.property);
                            let {
                                collectionPointer: f,
                                schema: h
                            } = yield* y(m, a);
                            if (!f) throw new(i()).I3({
                                type: i().uW.MissingDataDependencyBlock,
                                node: t,
                                blockPointer: m.pointer
                            });
                            if (!(0, o().Z2)(n.collection, f)) throw new(i()).I3({
                                type: i().uW.ThisRowBlockPropertyMismatchCollection,
                                node: t,
                                thisRowCollection: f
                            });
                            let g = (0, p().Yi)(n.property),
                                v = null == h ? void 0 : h[g];
                            if (void 0 === v || void 0 === h) throw new(i()).I3({
                                type: i().uW.MissingSchemaPropertyOnThisRow,
                                node: t,
                                collectionId: m.getParentId(),
                                property: g
                            });
                            return yield* c({
                                block: m,
                                parentCollectionPointer: f,
                                property: g,
                                schema: h,
                                propertySchema: v,
                                oldContext: a,
                                evaluateAST: u
                            })
                        }({
                            node: e,
                            token: u,
                            context: t,
                            evaluateAST: E
                        }))) : u.type === s().FormulaTokenType.ContextValue ? n.push(function(e) {
                            var t;
                            let {
                                node: r,
                                token: n,
                                context: a
                            } = e, o = null == (t = a.values.find(e => e.kind === s().FormulaContextValueKind.ContextValue && e.id === (0, p().GH)(n.valueId))) ? void 0 : t.value;
                            if (void 0 === o) throw new(i()).I3({
                                type: i().uW.MissingContextVariable,
                                node: r,
                                valueId: n.valueId
                            });
                            return o
                        }({
                            node: e,
                            token: u,
                            context: t
                        })) : (0, a().HB)(u)
                    } else if ("runLets" === x.type) {
                        let e = { ...t
                        };
                        for (let [t, r] of x.bindings) {
                            let n;
                            try {
                                n = yield* I(r, e)
                            } catch (e) {
                                R(e), n = {
                                    type: "undefined"
                                }
                            }
                            e.values = [{
                                kind: s().FormulaContextValueKind.Binding,
                                id: t,
                                value: n
                            }, ...e.values]
                        }
                        n.push((yield* I(x.body, e)))
                    } else if ("relativeJump" === x.type) u += x.offset;
                    else if ("relativeJumpIfTrue" === x.type) {
                        let e = n.popValue();
                        (0, p().CL)(e) && (u += x.offset)
                    } else if ("loadName" === x.type) {
                        let {
                            name: e,
                            node: r
                        } = x, a = null == (v = t.values.find(t => t.kind === s().FormulaContextValueKind.Binding && t.id === e)) ? void 0 : v.value;
                        if (void 0 !== a) n.push(a);
                        else if (d().LP.hasOwnProperty(e)) n.push({
                            type: "function",
                            function: d().LP[e]
                        });
                        else throw new(i()).I3({
                            type: i().uW.IdentifierNotFound,
                            node: r
                        })
                    } else if ("loadMemberBlockProperty" === x.type) {
                        let {
                            node: e,
                            propertyToken: r
                        } = x, a = n.popValue();
                        if ("undefined" === a.type) n.push({
                            type: "undefined"
                        });
                        else if ("block" !== a.type) throw new(i()).I3({
                            type: i().uW.AccessingPropertyOnNonBlock,
                            node: e,
                            expressionValue: a
                        });
                        else {
                            let s = (yield {
                                recordPointers: [a.value]
                            }).getRecordModel(a.value);
                            if (void 0 === s) throw new(i()).I3({
                                type: i().uW.MissingDataDependencyBlock,
                                node: e,
                                blockPointer: a.value
                            });
                            if (void 0 === r.collection) n.push((0, p().ve)(s, r.property));
                            else {
                                let {
                                    collectionPointer: a,
                                    schema: u
                                } = yield* y(s, t);
                                if (!a) throw new(i()).I3({
                                    type: i().uW.MissingDataDependencyBlock,
                                    node: e,
                                    blockPointer: s.pointer
                                });
                                if (!(0, o().Z2)(r.collection, a)) throw new(i()).I3({
                                    type: i().uW.MemberPropertyMismatchCollection,
                                    node: e,
                                    blockCollection: a
                                });
                                let l = (0, p().Yi)(r.property),
                                    d = null == u ? void 0 : u[l];
                                if (void 0 === d || void 0 === u) throw new(i()).I3({
                                    type: i().uW.MissingPropertyOnSchemaForMemberProperty,
                                    node: e
                                });
                                n.push((yield* c({
                                    block: s,
                                    property: l,
                                    parentCollectionPointer: a,
                                    schema: u,
                                    propertySchema: d,
                                    oldContext: t,
                                    evaluateAST: E
                                })))
                            }
                        }
                    } else(0, a().HB)(x);
                    if (t.depth > s().FORMULA_MAX_DEPTH) throw new(i()).I3({
                        type: i().uW.DepthExceeded
                    });
                    if (t.formulaTimeoutTimestampMs && Date.now() > t.formulaTimeoutTimestampMs) throw t.logFormulaTimeoutFn && t.logFormulaTimeoutFn(), new(i()).I3({
                        type: i().uW.MaxEvaluationTimeExceeded
                    })
                }
                return n.popValue()
            }

            function A(e, t, r) {
                return h(r, () => {
                    t.formulaTimeoutTimestampMs = t.formulaTimeoutTimestampMs ? ? Date.now() + 3e5;
                    let r = I(e, t),
                        n = r.next();
                    for (; !n.done;) {
                        let e = { ...n.value,
                                formulaEvaluationId: t.formulaEvaluationId
                            },
                            a = t.handleDataRequest(e);
                        n = r.next(a)
                    }
                    if (t.allowedValueTypes && !u(n.value, t.allowedValueTypes)) throw new(i()).I3({
                        allowedValueTypes: t.allowedValueTypes,
                        expressionValue: n.value,
                        type: i().uW.DisallowedValueType
                    });
                    return m(n.value)
                })
            }
            async function C(e, t, r) {
                return g(r, async () => {
                    t.formulaTimeoutTimestampMs = t.formulaTimeoutTimestampMs ? ? Date.now() + 3e5;
                    let r = performance.now(),
                        a = 0,
                        o = I(e, t),
                        s = o.next();
                    for (; !s.done;) {
                        let e, r = { ...s.value,
                                formulaEvaluationId: t.formulaEvaluationId
                            },
                            i = t.handleDataRequest(r);
                        if ((0, n().yL)(i)) {
                            let t = performance.now();
                            e = await i, a += performance.now() - t
                        } else e = i;
                        s = o.next(e)
                    }
                    if (t.allowedValueTypes && !u(s.value, t.allowedValueTypes)) throw new(i()).I3({
                        allowedValueTypes: t.allowedValueTypes,
                        expressionValue: s.value,
                        type: i().uW.DisallowedValueType
                    });
                    let l = performance.now() - r - a;
                    return {
                        value: m(s.value),
                        formulaEvaluationStats: {
                            syncEvaluationTimeMs: l
                        }
                    }
                })
            }

            function R(e) {
                if (e instanceof i().I3 && e.info.type === i().uW.DepthExceeded) throw e
            }
            async function P(e, t, n) {
                let a = k(N(t), e);
                return r(300441).Q.isFail(a) ? a : C(a.value, t, n)
            }
        },
        378675: (e, t, r) => {
            function n(e) {
                let {
                    block: t,
                    property: n,
                    getRecordModel: o,
                    formula2Error: i,
                    resultCache: l,
                    logFormulaStatsFn: p
                } = e, d = performance.now(), c = f({
                    resultCache: l,
                    blockId: t.id,
                    property: n
                });
                if (void 0 !== c) return null == p || p({
                    executionTimeMs: performance.now() - d,
                    cachedCount: 1
                }), u(c);
                let m = (0, r(975908).zN)({
                        block: t,
                        getRecordModel: o
                    }),
                    h = r(993189).Bj6.fromValue("collection", m);
                if (!h) return;
                let g = y({
                    blockModel: t,
                    collectionVersion: h.getVersion(),
                    propertyId: n
                });
                if (g) {
                    "u" < typeof window && (null == p || p({
                        error: "collection_formula_evaluator_got_thunk_on_server"
                    }));
                    let e = g();
                    if (e && e !== r(416901).FORMULA_LOADING) {
                        if (r(300441).Q.isFail(e)) {
                            null == p || p({
                                executionTimeMs: performance.now() - d,
                                cachedCount: 1,
                                error: e.error.type
                            }), (null == i ? void 0 : i.error) === null && (0, r(944897).Lc)(e.error) && (i.error = new(r(944897)).I3(e.error));
                            return
                        }
                        return e.value
                    }
                }
                let v = a({ ...e,
                    logFormulaStatsFn: p
                });
                if (null == p || p({
                        executionTimeMs: performance.now() - d,
                        uncachedCount: 1
                    }), !v) return;
                let x = s(v);
                if (r(300441).Q.isFail(x)) {
                    null == p || p({
                        error: x.error.type
                    }), (null == i ? void 0 : i.error) === null && (0, r(944897).Lc)(x.error) && (i.error = new(r(944897)).I3(x.error));
                    return
                }
                return x.value
            }

            function a(e) {
                let t = i(e);
                if (t) return s(t)
            }

            function o(e) {
                return i(e)
            }

            function i(e) {
                let {
                    block: t,
                    formulaCode: n,
                    property: a,
                    getRecordModel: o,
                    intl: i,
                    userTimeZone: s,
                    depth: u,
                    visitedProperties: l,
                    formulaTimeoutTimestampMs: p,
                    logFormulaTimeoutFn: d,
                    logUnsafeRegexFn: y,
                    publicPageDataCollection: c,
                    resultCache: f,
                    regExpCache: h,
                    formatDateCache: g,
                    experimentService: v,
                    collectionFeatureGates: x,
                    spaceIdCreator: b,
                    logFormulaStatsFn: k
                } = e;
                if (!r(299512)) return;
                let T = {
                        values: [{
                            kind: r(416901).FormulaContextValueKind.ThisRow,
                            value: {
                                type: "block",
                                value: t.pointer
                            }
                        }],
                        handleDataRequest: (0, r(297493).zg)(o),
                        intl: i,
                        userTimeZone: s,
                        depth: u,
                        visitedProperties: l,
                        formulaTimeoutTimestampMs: p,
                        logFormulaTimeoutFn: d,
                        logUnsafeRegexFn: y,
                        resultCache: f,
                        regExpCache: h,
                        formatDateCache: g,
                        publicPageDataCollection: c,
                        experimentService: v,
                        spaceId: t.space_id,
                        collectionFeatureGates: x,
                        spaceIdCreator: b,
                        logFormulaStatsFn: k
                    },
                    w = (0, r(299512).executeFormulaSync)(n, T);
                return "value" in w && m({
                    resultCache: f,
                    blockId: t.id,
                    property: a,
                    value: w.value
                }), w
            }

            function s(e) {
                return r(300441).Q.isFail(e) ? e : {
                    value: u(e.value)
                }
            }

            function u(e) {
                if ("function" === e.type) return {
                    type: "undefined"
                };
                if ("array" === e.type) {
                    var t;
                    if (0 === e.values.length) return {
                        type: "undefined"
                    };
                    let n = {
                        type: "array",
                        values: (0, r(297493).U)(e).values.filter(e => "undefined" !== e.type)
                    };
                    return l(n) ? (null == (t = n.values[0]) ? void 0 : t.type) === "function" ? {
                        type: "undefined"
                    } : n : {
                        type: "array",
                        values: r(381453).oE(n.values.map(e => {
                            if ("array" !== e.type) return {
                                type: "text",
                                value: (0, r(297493).Ht)(e)
                            }
                        }))
                    }
                }
                return e
            }

            function l(e) {
                return 0 === e.values.length || e.values.every(t => t.type === e.values[0].type)
            }
            r.d(t, {
                J6: () => y,
                LO: () => c,
                MC: () => n,
                UJ: () => o,
                Y7: () => u,
                dA: () => l,
                jA: () => s,
                kL: () => a,
                rV: () => d,
                wZ: () => m,
                wr: () => f
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(823215), r(354520), r(581454);
            let p = new WeakMap;

            function d(e) {
                let {
                    blockModel: t,
                    collectionVersion: r,
                    propertyId: n,
                    thunkCallback: a
                } = e, o = p.get(t), i = {
                    collectionVersion: r,
                    thunkCallback: a
                };
                void 0 === o ? p.set(t, {
                    [n]: i
                }) : o[n] = i
            }

            function y(e) {
                let {
                    blockModel: t,
                    collectionVersion: r,
                    propertyId: n
                } = e, a = p.get(t), o = null == a ? void 0 : a[n];
                return o ? o.collectionVersion !== r ? void delete a[n] : o.thunkCallback : void 0
            }

            function c({
                schema: e,
                property: t,
                blockModel: a,
                getRecordModel: o,
                intl: i,
                userTimeZone: s,
                depth: u,
                resultCache: l,
                regExpCache: p,
                formatDateCache: d,
                formulaTimeoutTimestampMs: y,
                visitedProperties: m,
                formula2Error: f,
                experimentService: h,
                shouldUsePersistedDates_ONLY_LEGACY_FORMULAS: g,
                collectionFeatureGates: v,
                spaceIdCreator: x,
                getRelationEdgeList: b
            }) {
                let k = e[t];
                if ((0, r(537664).F)(k)) {
                    if (!k.formula2) return;
                    let e = n({
                        block: a,
                        property: t,
                        formulaCode: k.formula2.code,
                        getRecordModel: o,
                        intl: i,
                        userTimeZone: s,
                        depth: u,
                        visitedProperties: m ? ? new Set,
                        formulaTimeoutTimestampMs: y,
                        formula2Error: f,
                        resultCache: l,
                        regExpCache: p,
                        formatDateCache: d,
                        experimentService: h,
                        collectionFeatureGates: v,
                        spaceIdCreator: x
                    });
                    if (!e) return;
                    if ("date" === e.type)
                        if (g) return e.value;
                        else return (0, r(850640).ZF)({
                            value: e.value,
                            userTimeZone: s,
                            intl: i,
                            allowRelativeDates: !1
                        });
                    return (0, r(829035).R2)({
                        result: e,
                        getRecordModel: o,
                        userTimeZone: s,
                        intl: i
                    })
                } {
                    let {
                        formula: n
                    } = k;
                    if (n) return (0, r(408343).L7)({
                        schema: e,
                        property: t,
                        block: a,
                        getRecordModel: o,
                        collectionRequestContext: {
                            userId: void 0,
                            userTimeZone: s,
                            depth: u,
                            intl: i,
                            resultCache: l,
                            regExpCache: p,
                            formatDateCache: d,
                            visitedProperties: m ? ? new Set,
                            formulaTimeoutTimestampMs: y,
                            experimentService: h,
                            collectionFeatureGates: v,
                            getRelationEdgeList: b
                        },
                        formula2Error: f,
                        spaceIdCreator: x
                    })
                }
            }

            function m({
                resultCache: e,
                blockId: t,
                property: n,
                value: a
            }) {
                let o = e.get(t) ? ? new Map;
                o.set(`${n}:${r(498587).A.FormulaValue2}`, a), e.set(t, o)
            }

            function f({
                resultCache: e,
                blockId: t,
                property: n
            }) {
                var a;
                return null == (a = e.get(t)) ? void 0 : a.get(`${n}:${r(498587).A.FormulaValue2}`)
            }
        },
        392599: (e, t, r) => {
            function n(e, t, r) {
                switch (e) {
                    case "en":
                    case "en-GB":
                        return a(t);
                    case "fr":
                        var n = t,
                            o = r;
                        switch (o) {
                            case "d":
                            case "n":
                                return n + (1 === n ? "er" : "");
                            case "W":
                                return n + (1 === n ? "re" : "e");
                            default:
                                return n + (1 === n ? "er" : "e")
                        }
                    case "de":
                    case "fi":
                    case "da":
                    case "nb":
                    case "nn":
                    case "no":
                        return `${t}.`;
                    case "ja":
                        var i = t,
                            s = r;
                        switch (s) {
                            case "y":
                                return 1 === i ? "元年" : `${i}年`;
                            case "n":
                                return `第${i}`;
                            case "d":
                            case "c":
                            case "o":
                                return `${i}日`;
                            default:
                                return i.toString()
                        }
                    case "ko":
                        var u = t,
                            l = r;
                        switch (l) {
                            case "n":
                                return `${u}번째`;
                            case "d":
                            case "c":
                            case "o":
                                return `${u}일`;
                            case "L":
                                return `${u}월`;
                            case "W":
                                return `${u}주`;
                            default:
                                return u.toString()
                        }
                    case "ps":
                        return `[!!!${a(t)}!!!]`;
                    case "es":
                    case "es-419":
                        var p = t,
                            d = r;
                        switch (d) {
                            case "d":
                            case "c":
                            case "o":
                            case "n":
                                return `${p}.\xba`;
                            case "W":
                                return `${p}.\xaa`;
                            default:
                                return p.toString()
                        }
                    case "pt":
                        var y = t,
                            c = r;
                        switch (c) {
                            case "d":
                            case "c":
                            case "o":
                            case "n":
                                return `${y}.\xba`;
                            case "W":
                                return `${y}.\xaa`;
                            default:
                                return y.toString()
                        }
                    case "nl":
                        return `${t}e`;
                    case "sv":
                        return `${t}`;
                    case "zh":
                    case "zh-TW":
                        var m = t,
                            f = r;
                        switch (f) {
                            case "n":
                                return `第${m}`;
                            case "d":
                            case "c":
                            case "o":
                                return `${m} 日`;
                            case "L":
                                return `${m} 月`;
                            case "W":
                                return `${m} 周`;
                            case "y":
                                return 1 === m ? "元年" : `${m} 年`;
                            default:
                                return m.toString()
                        }
                    case "vi":
                    case "vi-VN":
                        var h = t,
                            g = r;
                        switch (g) {
                            case "d":
                            case "c":
                            case "o":
                            case "n":
                            case "W":
                            case "L":
                                return `thứ ${h}`;
                            default:
                                return h.toString()
                        }
                    case "id":
                    case "id-ID":
                        var v = t,
                            x = r;
                        switch (x) {
                            case "d":
                            case "c":
                            case "o":
                            case "n":
                            case "W":
                            case "L":
                                return `ke-${v}`;
                            default:
                                return v.toString()
                        }
                    case "th":
                    case "th-TH":
                        var b = t,
                            k = r;
                        switch (k) {
                            case "d":
                            case "c":
                            case "o":
                            case "n":
                            case "W":
                            case "L":
                                return `ที่ ${b}`;
                            default:
                                return b.toString()
                        }
                    case "ar":
                    case "he":
                        return t.toString();
                    default:
                        return
                }
            }

            function a(e) {
                let t = e % 10,
                    r = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + r
            }
            r.d(t, {
                o: () => n
            })
        },
        400558: (e, t, r) => {
            r.d(t, {
                xK: () => k,
                Fd: () => p,
                x3: () => c,
                P7: () => u,
                SU: () => i,
                KN: () => f,
                R: () => m,
                Py: () => P,
                HH: () => O,
                Y2: () => S,
                pC: () => F,
                hq: () => s,
                _2: () => g,
                iZ: () => h,
                Hx: () => function e(t) {
                    let r = [];
                    for (let n of t)
                        if ("array" === n.type) {
                            let t = e(n.values);
                            r.push(...t)
                        } else "number" === n.type && r.push(n.value);
                    return r
                },
                kk: () => b,
                tr: () => C,
                m8: () => A,
                qs: () => T,
                ZV: () => w,
                fr: () => M
            }), r(18107), r(944114), r(967357), r(898992), r(823215), r(354520), r(672577), r(430670), r(803949), r(581454), r(737550);
            var n = r.n(r(794148));
            r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var a = () => r(458230),
                o = () => r(247438);

            function i(e, t, r) {
                return {
                    name: e,
                    * eval(e, t) {
                        return {
                            type: "number",
                            value: r
                        }
                    },
                    returnType: {
                        type: "number"
                    },
                    iconType: {
                        type: "number"
                    },
                    examples: [
                        [{
                            input: `${e}()`,
                            output: r.toString()
                        }]
                    ],
                    syntax: [`${e}()`],
                    description: t
                }
            }

            function s(e, t, r, a) {
                let o = a.map(t => ({
                        input: `${e}(${t})`,
                        output: `${r(t)}`
                    })),
                    i = a.map(t => ({
                        input: `${t}.${e}()`,
                        output: `${r(t)}`
                    }));
                return {
                    name: e,
                    * eval(e, t) {
                        let [a] = e;
                        return n()("number" === a.type), {
                            type: "number",
                            value: r(a.value)
                        }
                    },
                    parameters: {
                        expected: [{
                            name: "input",
                            type: {
                                type: "number"
                            }
                        }]
                    },
                    returnType: {
                        type: "number"
                    },
                    iconType: {
                        type: "number"
                    },
                    examples: [o, i],
                    syntax: [`${e}(number)`, `number.${e}()`],
                    description: t
                }
            }

            function u(e, t, a, o) {
                return {
                    name: e,
                    * eval(t, o) {
                        let [i, s] = t;
                        if (r(416901).TREAT_UNDEFINED_AS_ZERO_FNS.includes(e))
                            if ("undefined" === i.type && "undefined" === s.type) return {
                                type: "number",
                                value: 0
                            };
                            else "undefined" === i.type && "number" === s.type ? i = {
                                type: "number",
                                value: 0
                            } : "undefined" === s.type && "number" === i.type && (s = {
                                type: "number",
                                value: 0
                            });
                        return n()("number" === i.type && "number" === s.type), {
                            type: "number",
                            value: a(i.value, s.value)
                        }
                    },
                    parameters: {
                        expected: [{
                            name: "lhs",
                            type: {
                                type: "number"
                            }
                        }, {
                            name: "rhs",
                            type: {
                                type: "number"
                            }
                        }]
                    },
                    returnType: {
                        type: "number"
                    },
                    iconType: {
                        type: "number"
                    },
                    examples: [
                        [{
                            input: `${e}(5, 10)`,
                            output: `${a(5,10)}`
                        }, {
                            input: `5 ${o} 10`,
                            output: `${a(5,10)}`
                        }],
                        [{
                            input: `5.${e}(10)`,
                            output: `${a(5,10)}`
                        }, {
                            input: `5 ${o} 10`,
                            output: `${a(5,10)}`
                        }]
                    ],
                    syntax: [`${e}(number, number)`, `number.${e}(number)`],
                    description: t
                }
            }
            let l = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];

            function* p(e, t, n) {
                let a = yield*(0, r(297493).o7)(e, t);
                if ("s" !== a.at(-1) && (a += "s"), !l.includes(a.toLowerCase())) throw new(r(944897)).x4({
                    type: r(944897).v3.DateInvalidDurationUnit,
                    invalidUnit: a,
                    functionName: n
                });
                return a
            }
            let d = [...r(700369).PA, "compact", "bytes", "bytes_binary", "bytes_decimal"],
                y = {
                    humanize: "compact",
                    commas: "number_with_commas",
                    bytes: "bytes_binary"
                };
            for (let [e, t] of Object.entries(r(700369).bH)) y[e.toLowerCase()] = t;

            function* c(e, t) {
                let n = yield*(0, r(297493).o7)(e, t), a = n.toLowerCase(), o = y[a] || a;
                if (!d.includes(o)) throw new(r(944897)).x4({
                    type: r(944897).v3.NumberFormatInvalid,
                    invalidFormat: n
                });
                return o
            }

            function m(e, t) {
                return function*(a, o) {
                    let [i, s, u] = a;
                    n()("date" === i.type && "number" === s.type && "text" === u.type);
                    let l = "datetime" === i.value.type || "datetimerange" === i.value.type ? i.value.time_zone : o.userTimeZone,
                        d = (0, r(25825).AA)(i.value, l),
                        y = yield* p(u.value, o, t), c = e(d.start, s.value, y), m = "hours" === y || "minutes" === y || "seconds" === y || "milliseconds" === y;
                    return {
                        type: "date",
                        value: "date" !== i.value.type && "daterange" !== i.value.type || m ? (0, r(25825).KQ)(c, l) : (0, r(25825).p6)(c, l)
                    }
                }
            }

            function f(e) {
                return function*(t, a) {
                    let [o] = t;
                    n()("date" === o.type);
                    let i = (0, r(25825).kW)(o.value, a.userTimeZone);
                    return {
                        type: "number",
                        value: e((0, r(25825).AA)((0, r(943003).j1)(i), a.userTimeZone, a.intl.locale).start)
                    }
                }
            }

            function* h(e, t) {
                try {
                    return yield* function*(e, t) {
                        return yield*(0, r(337663).RE)(e.instructions, t)
                    }(e, t)
                } catch (e) {
                    if (e instanceof r(944897).I3 && e.info.type === r(944897).uW.DepthExceeded) throw e;
                    return {
                        type: "undefined"
                    }
                }
            }

            function g(e, t, n) {
                return (0, r(30192).KZ)(e.map((e, a) => h(t, { ...n,
                    values: [{
                        kind: r(416901).FormulaContextValueKind.Binding,
                        id: r(416901).CURRENT_VALUE_NAME,
                        value: e
                    }, {
                        kind: r(416901).FormulaContextValueKind.Binding,
                        id: r(416901).CURRENT_INDEX_NAME,
                        value: {
                            type: "number",
                            value: a
                        }
                    }, ...n.values]
                })))
            }
            let v = {
                    b: ["b"],
                    i: ["i"],
                    s: ["s"],
                    u: ["_"],
                    c: ["c"]
                },
                x = ["b", "i", "s", "_", "c", "h"];

            function b(e) {
                let t = [];
                return e.forEach(e => {
                    var n;
                    for (let a of null == e || null == (n = e[0]) ? void 0 : n[0].toLowerCase().split(",")) {
                        let e = function(e) {
                            let t = r(632079).Wr.find(t => t === e);
                            if (t) return [o().Ifu.Highlight, t];
                            if ("green" === e) return [o().Ifu.Highlight, "teal"];
                            if ("green_background" === e) return [o().Ifu.Highlight, "teal_background"];
                            if ("grey" === e) return [o().Ifu.Highlight, "gray"];
                            if ("grey_background" === e) return [o().Ifu.Highlight, "gray_background"]
                        }(a);
                        if (e) t.push(e);
                        else {
                            let e = v[a];
                            e && t.push(e)
                        }
                    }
                }), t
            }

            function k(e, t) {
                return e.map(e => {
                    let r = (0, o().uPN)(e);
                    return (0, o().Ey_)((0, o().N8A)(e), [...r, ...t])
                })
            }

            function T(e, t) {
                return e.map(e => (0, o().Ey_)((0, o().N8A)(e), (0, o().uPN)(e).filter(e => {
                    let r = (0, o()._XS)(e);
                    return !x.includes(r) || !(void 0 === t || t.some(t => r === t[0] && (void 0 === t[1] || e[1] === t[1])))
                })))
            }

            function* w(e, t) {
                if (E(e)) return e.sort((e, r) => I({
                    left: e,
                    right: r,
                    context: t
                }));
                let n = (0, r(381453).oE)(e.flatMap(e => (0, r(297493).vu)(e))),
                    a = n.length ? (yield {
                        recordPointers: n
                    }).getRecordModel : r(774995).b.constant(void 0),
                    o = e.map(e => (0, r(829035).R2)({
                        result: e,
                        getRecordModel: a,
                        userTimeZone: t.userTimeZone,
                        intl: t.intl,
                        useImprovedSort: !0
                    }));
                return (0, r(381453).yU)(e, o).sort((e, n) => (0, r(829035).a7)(e[1], n[1], {
                    intl: t.intl,
                    useIntl: !!t.collectionFeatureGates.collections_text_sort_locale_collator
                })).map(([e]) => e)
            }

            function* M(e, t, n) {
                let a = yield* g(e, t, n);
                if (E(a)) return (0, r(381453).yU)(e, a).sort((e, t) => I({
                    left: e[1],
                    right: t[1],
                    context: n
                })).map(([e]) => e);
                let o = (0, r(381453).oE)(a.flatMap(e => (0, r(297493).vu)(e))),
                    i = o.length ? (yield {
                        recordPointers: o
                    }).getRecordModel : r(774995).b.constant(void 0),
                    s = a.map(e => (0, r(829035).R2)({
                        result: e,
                        getRecordModel: i,
                        userTimeZone: n.userTimeZone,
                        intl: n.intl,
                        useImprovedSort: !0
                    }));
                return (0, r(381453).yU)(e, s).sort((e, t) => (0, r(829035).a7)(e[1], t[1], {
                    intl: n.intl,
                    useIntl: !!n.collectionFeatureGates.collections_text_sort_locale_collator
                })).map(([e]) => e)
            }
            let N = ["number", "date", "checkbox", "undefined"];

            function E(e) {
                let t;
                return e.every(e => "undefined" === e.type || (void 0 === t ? !!N.includes(e.type) && (t = e.type, !0) : t === e.type))
            }

            function I(e) {
                let {
                    left: t,
                    right: n,
                    context: a
                } = e;
                return "date" === t.type && "date" === n.type ? (0, r(297493).i3)(t.value, n.value, a.userTimeZone) : "number" === t.type && "number" === n.type ? t.value - n.value : "checkbox" === t.type && "checkbox" === n.type ? t.value === n.value ? 0 : t.value ? 1 : -1 : "undefined" === t.type ? +("undefined" !== n.type) : "undefined" === n.type ? -1 : 0
            }

            function A(e) {
                let {
                    timeZone: t,
                    context: r
                } = e;
                if ((null == t ? void 0 : t.type) === "text") {
                    let e = (0, o().k4p)(t.value);
                    if (e.startsWith("GMT") && e.length > 3) {
                        let t = "-" === e[3] ? "+" : "-";
                        return `Etc/GMT${t}${e.slice(4)}`
                    }
                    return e
                }
                return r.userTimeZone
            }

            function* C(e, t, r, n, a) {
                let i = yield* R(e, a, {
                    disableAnnotationPrefix: !1
                }), s = yield* R(r, a), u = Math.min(Math.floor(t), 1e4), l = (0, o().AhH)(i);
                if (l >= t) return {
                    type: "text",
                    value: e
                };
                let p = (0, o().AhH)(s),
                    d = u - l,
                    y = p > 0 ? Math.floor(d / p) : 0,
                    c = d % p,
                    m = [];
                "end" === n && m.push(...e);
                for (let e = 0; e < y; e++) m.push(...s);
                return c > 0 && m.push(...(0, o().AI5)(s, 0, c).tokensInsideRange), "start" === n && m.push(...e), {
                    type: "text",
                    value: (0, o().__s)(m)
                }
            }

            function* R(e, t, n) {
                let i = (0, r(561872).dg)(e);
                return function(e) {
                    let {
                        textValue: t,
                        getRecordModel: r,
                        userTimeZone: n,
                        intl: i,
                        seenBlocks: s = new Set,
                        deterministic: u = !1,
                        disableAnnotationPrefix: l = !1,
                        disableInsertedAnnotations: p = !1,
                        renderDateAnnotationsAsISO: d = !1,
                        externalIntegrations: y
                    } = e, c = [], m = l ? "" : "@";
                    for (let e of o().RQ(t)) {
                        let l = o().uPN(e);
                        if (!l.length) {
                            c.push(e);
                            continue
                        }
                        let f = (0, a().t2)({
                                token: e,
                                getRecordModel: r,
                                userTimeZone: n,
                                deterministic: u,
                                intl: i,
                                seenBlocks: s,
                                prefix: m,
                                disableInsertedAnnotations: p,
                                renderDateAnnotationsAsISO: d,
                                externalIntegrations: y
                            }),
                            h = (0, a().Px)(l, p);
                        (null != t && t.length || h.length) && c.push((0, o().Ey_)(f ? ? "", h))
                    }
                    return c
                }({
                    textValue: e,
                    getRecordModel: i.length ? (yield {
                        recordPointers: i
                    }).getRecordModel : r(774995).b.constant(void 0),
                    userTimeZone: t.userTimeZone,
                    deterministic: !0,
                    intl: t.intl,
                    disableAnnotationPrefix: !0,
                    ...n
                })
            }

            function P(e) {
                return (0, o().wmz)((0, o().ESw)({
                    collection: void 0,
                    name: e,
                    property: e
                }))
            }

            function F(e) {
                return (0, o().wmz)((0, o().ESw)({
                    collection: void 0,
                    name: (0, r(464930).i)(e),
                    property: e
                }))
            }

            function S(e) {
                return (0, o().wmz)((0, o().ESw)(e))
            }

            function O(e) {
                return (0, o().wmz)((0, o().CA$)(e))
            }
        },
        408343: (e, t, r) => {
            function n(e) {
                let {
                    schema: t,
                    property: n,
                    block: o,
                    getRecordModel: i,
                    collectionRequestContext: s,
                    formula2Error: u,
                    spaceIdCreator: l
                } = "getRecordModel" in e ? e : { ...e,
                    block: r(993189).Bj6.fromBlock(e.block),
                    getRecordModel: r(993189).b4_.fromGetRecordValueFn(e.getRecordValue)
                }, {
                    depth: p,
                    resultCache: d,
                    visitedProperties: y,
                    formulaTimeoutTimestampMs: c,
                    logFormulaTimeoutFn: m
                } = s, f = t[n];
                if (!(f && "formula" === f.type && f.formula)) return;
                let {
                    formula: h
                } = f;
                if (p > 15) {
                    (null == u ? void 0 : u.error) === null && (u.error = new(r(944897)).I3({
                        type: r(944897).uW.DepthExceeded
                    }));
                    return
                }
                let g = `${o.id}:${n}`;
                if (y.has(g)) {
                    (null == u ? void 0 : u.error) === null && (u.error = new(r(944897)).I3({
                        type: r(944897).uW.CycleDetected
                    }));
                    return
                }
                let v = function({
                    resultCache: e,
                    blockId: t,
                    property: n
                }) {
                    var a;
                    return null == (a = e.get(t)) ? void 0 : a.get(`${n}:${r(498587).A.FormulaValue}`)
                }({
                    resultCache: d,
                    blockId: o.id,
                    property: n
                });
                if (void 0 !== v) return v;
                if (c && Date.now() > c) {
                    m && m(), (null == u ? void 0 : u.error) === null && (u.error = new(r(944897)).I3({
                        type: r(944897).uW.MaxEvaluationTimeExceeded
                    }));
                    return
                }
                let x = new Set(y);
                x.add(g);
                try {
                    let e = function e(t) {
                        let {
                            formula: n,
                            schema: o,
                            block: i,
                            getRecordModel: s,
                            collectionRequestContext: u,
                            formula2Error: l,
                            spaceIdCreator: p
                        } = "getRecordModel" in t ? t : { ...t,
                            block: r(993189).Bj6.fromBlock(t.block),
                            getRecordModel: r(993189).b4_.fromGetRecordValueFn(t.getRecordValue)
                        }, {
                            userTimeZone: d,
                            intl: y
                        } = u;
                        if ("conditional" === n.type)
                            if (e({
                                    formula: n.condition,
                                    schema: o,
                                    block: i,
                                    getRecordModel: s,
                                    collectionRequestContext: u,
                                    formula2Error: l,
                                    spaceIdCreator: p
                                })) return e({
                                formula: n.true,
                                schema: o,
                                block: i,
                                getRecordModel: s,
                                collectionRequestContext: u,
                                formula2Error: l,
                                spaceIdCreator: p
                            });
                            else return e({
                                formula: n.false,
                                schema: o,
                                block: i,
                                getRecordModel: s,
                                collectionRequestContext: u,
                                formula2Error: l,
                                spaceIdCreator: p
                            });
                        if ("constant" === n.type) {
                            let {
                                value: e,
                                value_type: t
                            } = n;
                            return "string" === t ? e : "number" === t ? parseFloat(e) : "boolean" === t ? !!JSON.parse(e) : void 0
                        }
                        if ("function" === n.type) {
                            let {
                                args: t
                            } = n, a = (t || []).map(t => e({
                                formula: t,
                                schema: o,
                                block: i,
                                getRecordModel: s,
                                collectionRequestContext: u,
                                formula2Error: l,
                                spaceIdCreator: p
                            })), c = r(825085).N9(n.name), m = r(825085).F5(n.name);
                            return c ? c.apply(a, d, y, i) : m ? m.apply(a, d, y, i) : void 0
                        }
                        if ("property" === n.type) return a({
                            property: n.id,
                            schema: o,
                            block: i,
                            getRecordModel: s,
                            collectionRequestContext: u,
                            formula2Error: l,
                            spaceIdCreator: p
                        });
                        if ("operator" === n.type) {
                            let {
                                args: t,
                                name: a
                            } = n, c = (t || []).map(t => e({
                                formula: t,
                                schema: o,
                                block: i,
                                getRecordModel: s,
                                collectionRequestContext: u,
                                formula2Error: l,
                                spaceIdCreator: p
                            })), m = r(825085).F5(a);
                            if (!m) return;
                            return m.apply(c, d, y, i)
                        }
                        if ("symbol" === n.type) {
                            let {
                                name: e
                            } = n;
                            if (e in r(825085).AA) return r(825085).AA[e].value
                        }
                    }({
                        formula: h,
                        schema: t,
                        block: o,
                        getRecordModel: i,
                        collectionRequestContext: { ...s,
                            visitedProperties: x
                        },
                        formula2Error: u,
                        spaceIdCreator: l
                    });
                    if ("date" === h.result_type && !((0, r(722371).Gv)(e) && (0, r(943003).cW)(e.type))) return;
                    if ((0, r(763230).Et)(e)) {
                        if (!Number.isFinite(e)) return;
                        e = r(381453).LI(e, 12)
                    }
                    return function({
                        resultCache: e,
                        blockId: t,
                        property: n,
                        value: a
                    }) {
                        let o = e.get(t) ? ? new Map;
                        o.set(`${n}:${r(498587).A.FormulaValue}`, a), e.set(t, o)
                    }({
                        resultCache: d,
                        blockId: o.id,
                        property: n,
                        value: e
                    }), e
                } catch (e) {
                    console.error(e)
                }
            }

            function a(e) {
                let t = "getRecordModel" in e ? e : { ...e,
                        block: r(993189).Bj6.fromBlock(e.block),
                        getRecordModel: r(993189).b4_.fromGetRecordValueFn(e.getRecordValue)
                    },
                    {
                        property: n,
                        schema: a
                    } = t,
                    o = a[n];
                if (o) return u[o.type](t)
            }

            function o(e) {
                let {
                    property: t,
                    block: n,
                    getRecordModel: a
                } = e, o = n.getProperty(t, a) || [];
                return r(247438).k4p(o)
            }

            function i(e) {
                let {
                    property: t,
                    block: n,
                    getRecordModel: a
                } = e, o = n.getProperty(t, a) || [];
                return r(561872).MO(o)
            }

            function s(e) {
                let {
                    timestampType: t,
                    block: n,
                    userTimeZone: a
                } = e;
                if ("created_time" === t) {
                    if (n.getCreatedTime()) return r(25825).KQ(n.getCreatedTime(), a)
                } else if ("last_edited_time" === t) {
                    if (n.getLastEditedTime()) return r(25825).KQ(n.getLastEditedTime(), a)
                } else(0, r(722371).HB)(t)
            }
            r.d(t, {
                L7: () => n,
                NI: () => s,
                by: () => l,
                ws: () => a
            }), r(16280), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            let u = {
                title: o,
                text: o,
                url: i,
                email: i,
                phone_number: i,
                select: ({
                    property: e,
                    schema: t,
                    block: n,
                    getRecordModel: a
                }) => {
                    let o = n.getProperty(e, a) || [],
                        i = t[e].options || [];
                    return r(561872).L3(o, i)
                },
                multi_select: ({
                    property: e,
                    schema: t,
                    block: n,
                    getRecordModel: a
                }) => {
                    let o = n.getProperty(e, a) || [],
                        i = t[e].options || [];
                    return r(561872).o2(o, i).join(", ")
                },
                status: ({
                    property: e,
                    schema: t,
                    block: n,
                    getRecordModel: a
                }) => {
                    let o = n.getProperty(e, a) || [],
                        i = t[e];
                    return r(561872).RZ(o, i)
                },
                checkbox: ({
                    property: e,
                    block: t,
                    getRecordModel: n
                }) => {
                    let a = t.getProperty(e, n) || [];
                    return (0, r(896216).w)(a)
                },
                date: ({
                    property: e,
                    block: t,
                    getRecordModel: n
                }) => {
                    let a = t.getProperty(e, n) || [];
                    return (0, r(179358).b)(a)
                },
                person: ({
                    property: e,
                    block: t,
                    getRecordModel: n,
                    schema: a,
                    collectionRequestContext: o
                }) => {
                    let {
                        intl: i
                    } = o, s = t.getProperty(e, n) || [], u = a[e];
                    return (0, r(465256).e)({
                        textValue: s,
                        propertySchema: u,
                        blockCreatorPointer: t.getCreatedByPointer(),
                        convertGroupPointersToBeComposite: !0
                    }).map(e => {
                        if (e.table === r(659341).n) {
                            let t = n(e);
                            return (0, r(95384).n)({
                                intl: i,
                                permissionGroupModel: t
                            })
                        }
                        return (0, r(197018).lR)(i, (0, r(197018).xC)({
                            pointer: e,
                            getRecordModel: n
                        }))
                    }).join(", ")
                },
                relation: ({
                    property: e,
                    block: t,
                    getRecordModel: n,
                    schema: a
                }) => {
                    let o = t.getProperty(e, n) || [],
                        i = a[e];
                    if (i && "relation" === i.type) return r(561872).bG({
                        relationValue: r(561872).n(o),
                        propertySchema: i,
                        getRecordModel: n,
                        includeNoAccess: !1
                    }).map(e => {
                        let t = n(e);
                        if (!t) return;
                        let a = t.getProperty("title", n);
                        return a ? r(247438).k4p(a) : void 0
                    }).join(", ")
                },
                rollup: e => {
                    let {
                        property: t,
                        schema: n,
                        block: a,
                        getRecordModel: o,
                        collectionRequestContext: i,
                        spaceIdCreator: s
                    } = e, u = n[t];
                    if (!u || "rollup" !== u.type || !u.aggregation || "show_unique" === u.aggregation) return r(26837).I({
                        property: t,
                        schema: n,
                        block: a,
                        getRecordModel: o,
                        collectionRequestContext: i,
                        formulasModule: r(299512),
                        spaceIdCreator: s
                    }); {
                        let e = r(26837).Pm({
                            property: t,
                            schema: n,
                            block: a,
                            getRecordModel: o,
                            collectionRequestContext: i,
                            formulasModule: r(299512),
                            spaceIdCreator: s
                        });
                        if (void 0 === e) return;
                        if ("text" === e.type || "number" === e.type || "date" === e.type) return e.value;
                        (0, r(722371).HB)(e)
                    }
                },
                number: ({
                    property: e,
                    block: t,
                    getRecordModel: n
                }) => {
                    let a = t.getProperty(e, n) || [];
                    return (0, r(588688).M)(a)
                },
                file: e => {
                    let {
                        property: t,
                        schema: n,
                        block: a,
                        getRecordModel: o
                    } = e, i = a.getProperty(t, o) || [], s = n[t];
                    return r(561872).pJ(i, s).map(({
                        url: e
                    }) => e).join(", ")
                },
                formula: e => {
                    let {
                        intl: t,
                        userTimeZone: a,
                        formulaTimeoutTimestampMs: o,
                        depth: i,
                        visitedProperties: s,
                        collectionFeatureGates: u
                    } = e.collectionRequestContext, l = e.schema[e.property];
                    return (0, r(537664).F)(l) ? (0, r(378675).LO)({
                        schema: e.schema,
                        property: e.property,
                        blockModel: e.block,
                        getRecordModel: e.getRecordModel,
                        intl: t,
                        userTimeZone: a,
                        depth: i + 1,
                        formulaTimeoutTimestampMs: o,
                        visitedProperties: s,
                        formula2Error: e.formula2Error,
                        resultCache: e.collectionRequestContext.resultCache,
                        regExpCache: e.collectionRequestContext.regExpCache,
                        formatDateCache: e.collectionRequestContext.formatDateCache,
                        experimentService: e.collectionRequestContext.experimentService,
                        shouldUsePersistedDates_ONLY_LEGACY_FORMULAS: !0,
                        collectionFeatureGates: u,
                        spaceIdCreator: e.spaceIdCreator
                    }) : n({ ...e,
                        collectionRequestContext: { ...e.collectionRequestContext,
                            depth: e.collectionRequestContext.depth + 1
                        }
                    })
                },
                created_time: ({
                    block: e,
                    collectionRequestContext: t
                }) => {
                    let {
                        userTimeZone: n
                    } = t, a = r(993189).Bj6.fromBlock(e);
                    if (a.getCreatedTime()) return r(25825).KQ(a.getCreatedTime(), n)
                },
                last_edited_time: ({
                    block: e,
                    collectionRequestContext: t
                }) => {
                    let {
                        userTimeZone: n
                    } = t, a = r(993189).Bj6.fromBlock(e);
                    if (a.getLastEditedTime()) return r(25825).KQ(a.getLastEditedTime(), n)
                },
                created_by: ({
                    block: e,
                    getRecordModel: t,
                    collectionRequestContext: n
                }) => {
                    let {
                        intl: a
                    } = n, o = r(993189).Bj6.fromBlock(e).getCreatedByPointer();
                    if (o) return (0, r(197018).lR)(a, (0, r(197018).xC)({
                        pointer: o,
                        getRecordModel: t
                    }));
                    let i = o && t(o);
                    return (0, r(197018).lR)(a, i)
                },
                last_edited_by: ({
                    block: e,
                    getRecordModel: t,
                    collectionRequestContext: n
                }) => {
                    let {
                        intl: a
                    } = n, o = r(993189).Bj6.fromBlock(e).getLastEditedByPointer();
                    if (o) return (0, r(197018).lR)(a, (0, r(197018).xC)({
                        pointer: o,
                        getRecordModel: t
                    }))
                },
                button: () => "",
                location: () => "",
                last_visited_time: () => "",
                auto_increment_id: ({
                    property: e,
                    block: t,
                    getRecordModel: n
                }) => {
                    let a = t.getProperty(e, n) || [];
                    return (0, r(588688).M)(a)
                },
                verification: () => {},
                place: o
            };

            function l(e) {
                let {
                    schema: t,
                    property: n,
                    collectionRequestContext: o
                } = e, {
                    userTimeZone: i,
                    intl: s
                } = o, u = a(e), l = t[n];
                if (!l) throw Error("Property not found");
                if ((0, r(763230).Et)(u)) {
                    if (!Number.isFinite(u)) return;
                    return u.toString()
                }
                return "boolean" == typeof u ? u.toString() : r(943003).kC(u) ? "date" === l.type ? (0, r(850640).ZF)({
                    value: u,
                    userTimeZone: i,
                    allowRelativeDates: !1,
                    intl: s
                }) : void 0 : u
            }
        },
        564433: (e, t, r) => {
            r.d(t, {
                u: () => o
            }), r(944114), r(898992), r(803949);
            let n = {
                    LLLL: "DDDD t",
                    llll: void 0,
                    LLL: "DDD t",
                    lll: "DD t",
                    LL: "DDD",
                    ll: "DD",
                    L: void 0,
                    l: void 0,
                    LT: "t",
                    LTS: "tt",
                    M: "L",
                    Mo: void 0,
                    MM: "LL",
                    MMM: void 0,
                    MMMM: void 0,
                    Q: "q",
                    Qo: void 0,
                    D: "d",
                    Do: void 0,
                    DD: "dd",
                    DDD: "o",
                    DDDo: void 0,
                    DDDD: "ooo",
                    d: void 0,
                    do: void 0,
                    dd: void 0,
                    ddd: void 0,
                    dddd: "cccc",
                    e: void 0,
                    E: "c",
                    w: void 0,
                    wo: void 0,
                    ww: void 0,
                    W: "W",
                    Wo: void 0,
                    WW: "WW",
                    YY: "yy",
                    YYYY: "yyyy",
                    YYYYYY: void 0,
                    Y: "y",
                    gg: "kk",
                    gggg: "kkkk",
                    GG: "kk",
                    GGGG: "kkkk",
                    A: "a",
                    a: void 0,
                    H: "H",
                    HH: "HH",
                    h: "h",
                    hh: "hh",
                    k: void 0,
                    kk: void 0,
                    m: "m",
                    mm: "mm",
                    s: "s",
                    ss: "ss",
                    S: "uuu",
                    SS: "uu",
                    SSS: "SSS",
                    z: void 0,
                    zz: void 0,
                    Z: "ZZ",
                    ZZ: "ZZZ",
                    X: "X",
                    x: "x"
                },
                a = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|LTS|LT|LL?L?L?|l{1,4}|.)/g;

            function o(e, t) {
                if (!e || !e.isValid) return "";
                let o = [],
                    s = [],
                    u = (e.locale ? ? "en").substring(0, 2),
                    l = t => {
                        if (o.length > 0) {
                            let t = o.join("");
                            s.push(e.toFormat(t)), o = []
                        }
                        t && s.push(t)
                    },
                    p = t.match(a);
                return p ? (p.forEach(t => {
                    if (n[t]) o.push(n[t]);
                    else if (t in n && void 0 === n[t]) switch (t) {
                        case "llll":
                            "en" === u ? o.push("ccc, DD t") : "ja" === u ? o.push("DD(ccc) t") : "ko" === u ? o.push("DD cccc t") : "de" === u ? o.push("ccc., DD t") : o.push("ccc DD t");
                            break;
                        case "L":
                            "ko" === u ? o.push("yyyy.MM.dd.") : l(e.toLocaleString({
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            }));
                            break;
                        case "l":
                            "ja" === u ? l(e.toLocaleString({
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            })) : "ko" === u ? o.push("yyyy.MM.dd.") : "fr" === u ? o.push("d/M/y") : o.push("D");
                            break;
                        case "MMM":
                            "ja" === u ? l(e.toLocaleString({
                                month: "long"
                            })) : o.push("LLL");
                            break;
                        case "MMMM":
                            "ja" === u ? l(e.toLocaleString({
                                month: "long"
                            })) : o.push("LLLL");
                            break;
                        case "e":
                            if ("fr" === u || "de" === u) {
                                l((e.weekday - 1).toString());
                                break
                            }
                        case "d":
                        case "do":
                            let a = 7 === e.weekday ? 0 : e.weekday;
                            if ("do" === t) {
                                let e = (0, r(392599).o)(u, a, "c");
                                if (e) {
                                    l(e);
                                    break
                                }
                            }
                            l(a.toString());
                            break;
                        case "dd":
                            l(e.weekdayShort.substring(0, 2));
                            break;
                        case "ddd":
                            "de" === u ? o.push("ccc.") : o.push("ccc");
                            break;
                        case "ww":
                            if ("fr" === u || "de" === u) {
                                o.push("WW");
                                break
                            }
                        case "w":
                        case "wo":
                            let s = function(e, t) {
                                if ("fr" === t || "de" === t) return e.weekNumber;
                                let r = e.set({
                                    month: 1,
                                    day: 1
                                });
                                return i(e, r) || i(e, r.set({
                                    year: e.year + 1
                                })) ? 1 : function e(t) {
                                    if (7 === t.weekday) return e(t.plus({
                                        days: 1
                                    }));
                                    let r = t.set({
                                            month: 1,
                                            day: 1
                                        }),
                                        n = t.set({
                                            month: 1,
                                            day: 4
                                        });
                                    return r.weekNumber !== n.weekNumber && 1 !== (7 === r.weekday ? t.set({
                                        month: 1,
                                        day: 2
                                    }).weekNumber : r.weekNumber) ? t.weekNumber + 1 : t.weekNumber
                                }(e)
                            }(e, u);
                            if ("wo" === t) {
                                let e = (0, r(392599).o)(u, s, "W");
                                if (e) {
                                    l(e);
                                    break
                                }
                            }
                            l("ww" === t ? s.toString().padStart(2, "0") : s.toString());
                            break;
                        case "YYYYYY":
                            l(`+${e.year.toString().padStart(6,"0")}`);
                            break;
                        case "a":
                            l(e.toFormat("a").toLowerCase());
                            break;
                        case "k":
                            0 === e.hour ? l("24") : o.push("H");
                            break;
                        case "kk":
                            0 === e.hour ? l("24") : o.push("HH");
                            break;
                        case "Mo":
                        case "Qo":
                        case "Do":
                        case "DDDo":
                        case "Wo":
                            let p = n[t.replace("o", "")],
                                d = function(e, t, n) {
                                    let a = parseInt(t.toFormat(n));
                                    if (!isNaN(a)) return (0, r(392599).o)(e, a, n)
                                }(u, e, p);
                            d ? l(d) : o.push(p);
                            break;
                        case "z":
                        case "zz":
                            l(e.zone.offsetName(e.toMillis(), {
                                format: "short",
                                locale: "en-US"
                            }));
                            break;
                        default:
                            (0, r(722371).HB)(t)
                    } else /^S{4,9}/.test(t) ? o.push("SSS") : /^\[.*\]$/.test(t) ? l(t.substring(1, t.length - 1)) : l(t.replace(/\\/g, ""))
                }), l(), s.join("")) : e.toFormat(t)
            }

            function i(e, t) {
                let r = 7 === e.weekday ? e.plus({
                        days: 1
                    }) : e,
                    n = 7 === t.weekday ? t.plus({
                        days: 1
                    }) : t;
                return r.hasSame(n, "week")
            }
        },
        807381: (e, t, r) => {
            let n;
            r.d(t, {
                $t: () => y,
                BC: () => d,
                nM: () => p,
                tP: () => u
            }), r(16280), r(944114), r(898992), r(354520);
            var a = () => r(416901),
                o = () => r(301040),
                i = () => r(888085),
                s = () => r(944897);

            function u(e, t) {
                let n = (0, i().p8)(),
                    u = (0, i().TM)(n).tokenize(e),
                    l = [];
                for (let e of u.errors) l.push((0, i().Q7)(e));
                for (let e of u.tokens.filter(e => e.tokenType === n.UnclosedStringLiteral || e.tokenType === n.UnclosedComment)) l.push({
                    type: e.tokenType === n.UnclosedStringLiteral ? s().M9.UnclosedStringLiteral : s().M9.UnclosedComment,
                    offset: t ? (0, o().c3)(t, e.startOffset, "left") : e.startOffset
                });
                for (let e of u.tokens.filter(e => e.tokenType === n.StringLiteral)) a().FORMULA_TOKEN_REGEX.test(e.image) && l.push({
                    type: s().M9.StringLiteralContainsToken,
                    offset: t ? (0, o().c3)(t, e.startOffset, "left") : e.startOffset
                });
                try {
                    let e = (0, i()._M)(n);
                    e.input = u.tokens;
                    let t = e.expression();
                    for (let t of e.errors) l.push((0, i().Ps)(t));
                    return [t, l]
                } catch (e) {
                    if (e instanceof RangeError && "Maximum call stack size exceeded" === e.message) l.push({
                        type: s().M9.TooDeeplyNested,
                        offset: 0
                    });
                    else {
                        let t = e instanceof Error ? e : Error("Unknown parsing error");
                        r(773352).log({
                            level: "error",
                            from: "parseFormulaInputToCst",
                            type: "formulaParserUnexpectedError",
                            error: t
                        }), l.push({
                            type: s().M9.UnexpectedError,
                            offset: 0,
                            error: t
                        })
                    }
                    return [{
                        name: "",
                        children: {}
                    }, l]
                }
            }
            let l = new WeakMap;
            class p {
                debug = !1;
                logCacheResult(e, t) {
                    this.incrMetric(t ? "formulas.parsing.weak_map_cache.hit" : "formulas.parsing.weak_map_cache.miss")
                }
                incrMetric(e) {
                    this.debug && console.log(e), this.incrMetricImpl(e)
                }
            }

            function d(e) {
                n || (n = e())
            }

            function y(e) {
                var t;
                let a = l.get(e);
                if (null == (t = n) || t.logCacheResult(e, (0, r(722371).O9)(a)), void 0 !== a) return a;
                let [i, s] = (0, o().kb)(e), [p, d] = u(i);
                return a = d.length > 0 ? {
                    error: d[0]
                } : (0, r(892016).f)(p), (0, r(722371).O9)(e) && l.set(e, a), a
            }
        },
        825085: (e, t, r) => {
            var n;
            r.d(t, {
                AA: () => s,
                F5: () => h,
                II: () => v,
                N9: () => x
            }), r(898992), r(581454), r(737550);
            let a = (0, r(109939).YK)({
                    e: {
                        id: "database.formula.constant.e.description",
                        defaultMessage: "The base of the natural logarithm."
                    },
                    pi: {
                        id: "database.formula.constant.pi.description",
                        defaultMessage: "The ratio of a circle’s circumference to its diameter."
                    },
                    if: {
                        id: "database.formula.operator.if.description",
                        defaultMessage: "Switches between two options based on another value."
                    },
                    add: {
                        id: "database.formula.operator.add.description",
                        defaultMessage: "Adds two numbers and returns their sum, or concatenates two strings."
                    },
                    subtract: {
                        id: "database.formula.operator.subtract.description",
                        defaultMessage: "Subtracts two numbers and returns their difference."
                    },
                    multiply: {
                        id: "database.formula.operator.multiply.description",
                        defaultMessage: "Multiplies two numbers and returns their product."
                    },
                    divide: {
                        id: "database.formula.operator.divide.description",
                        defaultMessage: "Divides two numbers and returns their quotient."
                    },
                    pow: {
                        id: "database.formula.operator.pow.description",
                        defaultMessage: "Returns base to the exponent power, that is, baseexponent."
                    },
                    mod: {
                        id: "database.formula.operator.mod.description",
                        defaultMessage: "Divides two numbers and returns their remainder."
                    },
                    unaryMinus: {
                        id: "database.formula.operator.unaryMinus.description",
                        defaultMessage: "Negates a number."
                    },
                    unaryPlus: {
                        id: "database.formula.operator.unaryPlus.description",
                        defaultMessage: "Converts its argument into a number."
                    },
                    not: {
                        id: "database.formula.operator.not.description",
                        defaultMessage: "Returns the logical NOT of its argument."
                    },
                    and: {
                        id: "database.formula.operator.and.description",
                        defaultMessage: "Returns the logical AND of its two arguments."
                    },
                    or: {
                        id: "database.formula.operator.or.description",
                        defaultMessage: "Returns the logical OR of its two arguments."
                    },
                    equal: {
                        id: "database.formula.operator.equal.description",
                        defaultMessage: "Returns true if its arguments are equal, and false otherwise."
                    },
                    unequal: {
                        id: "database.formula.operator.unequal.description",
                        defaultMessage: "Returns false if its arguments are equal, and true otherwise."
                    },
                    larger: {
                        id: "database.formula.operator.larger.description",
                        defaultMessage: "Returns true if the first argument is larger than the second."
                    },
                    largerEq: {
                        id: "database.formula.operator.largerEq.description",
                        defaultMessage: "Returns true if the first argument is larger than or equal to than the second."
                    },
                    smaller: {
                        id: "database.formula.operator.smaller.description",
                        defaultMessage: "Returns true if the first argument is smaller than the second."
                    },
                    smallerEq: {
                        id: "database.formula.operator.smallerEq.description",
                        defaultMessage: "Returns true if the first argument is smaller than or equal to than the second."
                    },
                    concat: {
                        id: "database.formula.function.concat.description",
                        defaultMessage: "Concatenates its arguments and returns the result."
                    },
                    join: {
                        id: "database.formula.function.join.description",
                        defaultMessage: "Inserts the first argument between the rest and returns their concatenation."
                    },
                    slice: {
                        id: "database.formula.function.slice.description",
                        defaultMessage: "Extracts a substring from a string from the start index (inclusively) to the end index (optional and exclusively)."
                    },
                    length: {
                        id: "database.formula.function.length.description",
                        defaultMessage: "Returns the length of a string."
                    },
                    format: {
                        id: "database.formula.function.format.description",
                        defaultMessage: "Formats its argument as a string."
                    },
                    toNumber: {
                        id: "database.formula.function.toNumber.description",
                        defaultMessage: "Parses a number from text."
                    },
                    contains: {
                        id: "database.formula.function.contains.description",
                        defaultMessage: "Returns true if the second argument is found in the first."
                    },
                    replace: {
                        id: "database.formula.function.replace.description",
                        defaultMessage: "Replaces the first match of a regular expression with a new value."
                    },
                    replaceAll: {
                        id: "database.formula.function.replaceAll.description",
                        defaultMessage: "Replaces all matches of a regular expression with a new value."
                    },
                    test: {
                        id: "database.formula.function.test.description",
                        defaultMessage: "Tests if a string matches a regular expression."
                    },
                    empty: {
                        id: "database.formula.function.empty.description",
                        defaultMessage: "Tests if a value is empty."
                    },
                    abs: {
                        id: "database.formula.function.abs.description",
                        defaultMessage: "Returns the absolute value of a number."
                    },
                    cbrt: {
                        id: "database.formula.function.cbrt.description",
                        defaultMessage: "Returns the cube root of a number."
                    },
                    ceil: {
                        id: "database.formula.function.ceil.description",
                        defaultMessage: "Returns the smallest integer greater than or equal to a number."
                    },
                    exp: {
                        id: "database.formula.function.exp.description",
                        defaultMessage: "Returns E^x, where x is the argument, and E is Euler’s constant (2.718…), the base of the natural logarithm."
                    },
                    floor: {
                        id: "database.formula.function.floor.description",
                        defaultMessage: "Returns the largest integer less than or equal to a number."
                    },
                    ln: {
                        id: "database.formula.function.ln.description",
                        defaultMessage: "Returns the natural logarithm of a number."
                    },
                    log10: {
                        id: "database.formula.function.log10.description",
                        defaultMessage: "Returns the base 10 logarithm of a number."
                    },
                    log2: {
                        id: "database.formula.function.log2.description",
                        defaultMessage: "Returns the base 2 logarithm of a number."
                    },
                    max: {
                        id: "database.formula.function.max.description",
                        defaultMessage: "Returns the largest of zero or more numbers."
                    },
                    min: {
                        id: "database.formula.function.min.description",
                        defaultMessage: "Returns the smallest of zero or more numbers."
                    },
                    round: {
                        id: "database.formula.function.round.description",
                        defaultMessage: "Returns the value of a number rounded to the nearest integer."
                    },
                    sign: {
                        id: "database.formula.function.sign.description",
                        defaultMessage: "Returns the sign of the x, indicating whether x is positive, negative or zero."
                    },
                    sqrt: {
                        id: "database.formula.function.sqrt.description",
                        defaultMessage: "Returns the positive square root of a number."
                    },
                    start: {
                        id: "database.formula.function.start.description",
                        defaultMessage: "Returns the start of a date range."
                    },
                    end: {
                        id: "database.formula.function.end.description",
                        defaultMessage: "Returns the end of a date range."
                    },
                    now: {
                        id: "database.formula.function.now.description",
                        defaultMessage: "Returns the current date and time."
                    },
                    timestamp: {
                        id: "database.formula.function.timestamp.description",
                        defaultMessage: "Returns an integer number from a Unix millisecond timestamp, corresponding to the number of milliseconds since January 1, 1970."
                    },
                    fromTimestamp: {
                        id: "database.formula.function.fromTimestamp.description",
                        defaultMessage: "Returns a date constructed from a Unix millisecond timestamp, corresponding to the number of milliseconds since January 1, 1970."
                    },
                    dateAdd: {
                        id: "database.formula.function.dateAdd.description",
                        defaultMessage: "Add to a date. The last argument, unit, can be one of: “years”, “quarters”, “months”, “weeks”, “days”, “hours”, “minutes”, “seconds”, or “milliseconds”."
                    },
                    dateSubtract: {
                        id: "database.formula.function.dateSubtract.description",
                        defaultMessage: "Subtract from a date. The last argument, unit, can be one of: “years”, “quarters”, “months”, “weeks”, “days”, “hours”, “minutes”, “seconds”, or “milliseconds”."
                    },
                    dateBetween: {
                        id: "database.formula.function.dateBetween.description",
                        defaultMessage: "Returns the time between two dates. The last argument, unit, can be one of: “years”, “quarters”, “months”, “weeks”, “days”, “hours”, “minutes”, “seconds”, or “milliseconds”."
                    },
                    formatDate: {
                        id: "database.formula.function.formatDate.description",
                        defaultMessage: "Format a date using the Moment standard time format string."
                    },
                    minute: {
                        id: "database.formula.function.minute.description",
                        defaultMessage: "Returns an integer number, between 0 and 59, corresponding to minutes in the given date."
                    },
                    hour: {
                        id: "database.formula.function.hour.description",
                        defaultMessage: "Returns an integer number, between 0 and 23, corresponding to hour for the given date."
                    },
                    day: {
                        id: "database.formula.function.day.description",
                        defaultMessage: "Returns an integer number corresponding to the day of the week for the given date: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on."
                    },
                    date: {
                        id: "database.formula.function.date.description",
                        defaultMessage: "Returns an integer number, between 1 and 31, corresponding to day of the month for the given."
                    },
                    month: {
                        id: "database.formula.function.month.description",
                        defaultMessage: "Returns an integer number, between 0 and 11, corresponding to month in the given date according to local time. 0 corresponds to January, 1 to February, and so on."
                    },
                    year: {
                        id: "database.formula.function.year.description",
                        defaultMessage: "Returns a number corresponding to the year of the given date."
                    },
                    id: {
                        id: "database.formula.function.id.description",
                        defaultMessage: "Returns a unique string id for each entry."
                    },
                    properties: {
                        id: "database.formula.category.properties",
                        defaultMessage: "Properties"
                    },
                    constants: {
                        id: "database.formula.category.constants",
                        defaultMessage: "Constants"
                    },
                    operators: {
                        id: "database.formula.category.operators",
                        defaultMessage: "Operators"
                    },
                    functions: {
                        id: "database.formula.category.functions",
                        defaultMessage: "Functions"
                    }
                }),
                o = ((n = {})[n.property = 0] = "property", n[n.constant = 1] = "constant", n[n.operator = 2] = "operator", n[n.function = 3] = "function", n),
                i = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
                s = {
                    e: {
                        name: "e",
                        value: Math.E,
                        category: o.constant,
                        descriptionMessage: a.e,
                        resultType: "number",
                        examples: ["e == 2.718281828459045"]
                    },
                    pi: {
                        name: "pi",
                        value: Math.PI,
                        category: o.constant,
                        descriptionMessage: a.pi,
                        resultType: "number",
                        examples: ["2 * pi == 6.283185307179586"]
                    },
                    true: {
                        name: "true",
                        value: !0,
                        category: o.constant,
                        descriptionMessage: void 0,
                        resultType: "checkbox",
                        examples: ['true ? "yes" : "no" == "yes"']
                    },
                    false: {
                        name: "false",
                        value: !1,
                        category: o.constant,
                        descriptionMessage: void 0,
                        resultType: "checkbox",
                        examples: ['false ? "yes" : "no" == "no"']
                    }
                };

            function u(e) {
                return {
                    resultType: e,
                    arity: [e, e]
                }
            }

            function l(e) {
                return {
                    resultType: e,
                    arity: [e]
                }
            }
            let p = u("number"),
                d = u("checkbox"),
                y = l("number"),
                c = l("date"),
                m = {
                    resultType: "number",
                    arity: ["date"]
                },
                f = [{
                    resultType: "checkbox",
                    arity: ["text", "text"]
                }, {
                    resultType: "checkbox",
                    arity: ["checkbox", "checkbox"]
                }, {
                    resultType: "checkbox",
                    arity: ["date", "date"]
                }, {
                    resultType: "checkbox",
                    arity: ["number", "number"]
                }];

            function h(e) {
                if (v.hasOwnProperty(e)) return v[e]
            }

            function g(e) {
                return e.some(e => "string" == typeof e) ? e.map(e => e || "") : e.map(e => e || 0)
            }
            let v = {
                if: {
                    name: "if",
                    apply: e => e[0] ? e[1] : e[2],
                    operator: "?",
                    category: o.operator,
                    descriptionMessage: a.if,
                    signatures: [{
                        resultType: "text",
                        arity: ["checkbox", "text", "text"]
                    }, {
                        resultType: "number",
                        arity: ["checkbox", "number", "number"]
                    }, {
                        resultType: "checkbox",
                        arity: ["checkbox", "checkbox", "checkbox"]
                    }, {
                        resultType: "date",
                        arity: ["checkbox", "date", "date"]
                    }],
                    examples: ["true ? 1 : -1 == 1", 'if(false, "yes", "no") == "no"']
                },
                add: {
                    name: "add",
                    apply: e => {
                        let t = g(e);
                        return t[0] + t[1]
                    },
                    operator: "+",
                    category: o.operator,
                    descriptionMessage: a.add,
                    signatures: [p, {
                        resultType: "text",
                        arity: ["text", "text"]
                    }],
                    examples: ["3 + 4 = 7", "add(1, 3) == 4", '"add" + "text" == "addtext"']
                },
                subtract: {
                    name: "subtract",
                    apply: e => {
                        let t = g(e);
                        return t[0] - t[1]
                    },
                    operator: "-",
                    category: o.operator,
                    descriptionMessage: a.subtract,
                    signatures: [p],
                    examples: ["3 - 1 == 2", "subtract(4, 5) == -1"]
                },
                multiply: {
                    name: "multiply",
                    apply: e => {
                        let t = g(e);
                        return t[0] * t[1]
                    },
                    operator: "*",
                    category: o.operator,
                    descriptionMessage: a.multiply,
                    signatures: [p],
                    examples: ["6 * 9 == 54", "multiply(2, 10) == 20"]
                },
                divide: {
                    name: "divide",
                    apply: e => {
                        let t = g(e);
                        return t[0] / t[1]
                    },
                    operator: "/",
                    category: o.operator,
                    descriptionMessage: a.divide,
                    signatures: [p],
                    examples: ["12 / 4 == 3", "divide(12, 3) == 4"]
                },
                pow: {
                    name: "pow",
                    apply: e => {
                        let t = g(e);
                        return Math.pow(t[0], t[1])
                    },
                    operator: "^",
                    category: o.operator,
                    descriptionMessage: a.pow,
                    signatures: [p],
                    examples: ["5 ^ 3 == 125", "pow(2, 6) == 64"]
                },
                mod: {
                    name: "mod",
                    apply: e => {
                        let t = g(e);
                        return t[0] % t[1]
                    },
                    operator: "%",
                    category: o.operator,
                    descriptionMessage: a.mod,
                    signatures: [p],
                    examples: ["7 % 5 == 2", "mod(3, 3) == 0"]
                },
                unaryMinus: {
                    name: "unaryMinus",
                    apply: e => -g(e)[0],
                    operator: "-",
                    category: o.operator,
                    descriptionMessage: a.unaryMinus,
                    signatures: [y],
                    examples: ["-1 + 2 == 1", "unaryMinus(42) == -42"]
                },
                unaryPlus: {
                    name: "unaryPlus",
                    apply: e => Number(g(e)[0]),
                    operator: "+",
                    category: o.operator,
                    descriptionMessage: a.unaryPlus,
                    signatures: [y, {
                        resultType: "number",
                        arity: ["text"]
                    }, {
                        resultType: "number",
                        arity: ["checkbox"]
                    }],
                    examples: ['+ "42" == 42', "unaryPlus(true) == 1"]
                },
                not: {
                    name: "not",
                    apply: e => !e[0],
                    operator: "not",
                    category: o.operator,
                    descriptionMessage: a.not,
                    signatures: [{
                        resultType: "checkbox",
                        arity: ["checkbox"]
                    }],
                    examples: ["not true == false", "not(false) == true"]
                },
                and: {
                    name: "and",
                    apply: e => e[0] && e[1],
                    operator: "and",
                    category: o.operator,
                    descriptionMessage: a.and,
                    signatures: [d],
                    examples: ["true and false == false", "and(true, true) == true"]
                },
                or: {
                    name: "or",
                    apply: e => e[0] || e[1],
                    operator: "or",
                    category: o.operator,
                    descriptionMessage: a.or,
                    signatures: [d],
                    examples: ["false or true == true", "or(false, false) == false"]
                },
                equal: {
                    name: "equal",
                    apply: (e, t) => {
                        let [n, a] = e;
                        return r(943003).kC(n) && r(943003).kC(a) ? r(25825).AA(n, t).start.valueOf() === r(25825).AA(a, t).start.valueOf() : n === a
                    },
                    operator: "==",
                    category: o.operator,
                    descriptionMessage: a.equal,
                    signatures: f,
                    examples: ["(3 * 5 == 15) == true", "equal(false, not true) == true"]
                },
                unequal: {
                    name: "unequal",
                    apply: (e, t) => {
                        let [n, a] = e;
                        return r(943003).kC(n) && r(943003).kC(a) ? r(25825).AA(n, t).start.valueOf() !== r(25825).AA(a, t).start.valueOf() : n !== a
                    },
                    operator: "!=",
                    category: o.operator,
                    descriptionMessage: a.unequal,
                    signatures: f,
                    examples: ["(6 * 9 != 42) == false", "(true != not false) == false"]
                },
                larger: {
                    name: "larger",
                    apply: (e, t) => {
                        let [n, a] = e;
                        return r(943003).kC(n) && r(943003).kC(a) ? r(25825).AA(n, t).start.valueOf() > r(25825).AA(a, t).start.valueOf() : n > a
                    },
                    operator: ">",
                    category: o.operator,
                    descriptionMessage: a.larger,
                    signatures: f,
                    examples: ["5 > 3 == true"]
                },
                largerEq: {
                    name: "largerEq",
                    apply: (e, t) => {
                        let [n, a] = e;
                        return r(943003).kC(n) && r(943003).kC(a) ? r(25825).AA(n, t).start.valueOf() >= r(25825).AA(a, t).start.valueOf() : n >= a
                    },
                    operator: ">=",
                    category: o.operator,
                    descriptionMessage: a.largerEq,
                    signatures: f,
                    examples: ["5 >= 3 == true", "4 >= 4 == true"]
                },
                smaller: {
                    name: "smaller",
                    apply: (e, t) => {
                        let [n, a] = e;
                        return r(943003).kC(n) && r(943003).kC(a) ? r(25825).AA(n, t).start.valueOf() < r(25825).AA(a, t).start.valueOf() : n < a
                    },
                    operator: "<",
                    category: o.operator,
                    descriptionMessage: a.smaller,
                    signatures: f,
                    examples: ["10 < 8 == false"]
                },
                smallerEq: {
                    name: "smallerEq",
                    apply: (e, t) => {
                        let [n, a] = e;
                        return r(943003).kC(n) && r(943003).kC(a) ? r(25825).AA(n, t).start.valueOf() <= r(25825).AA(a, t).start.valueOf() : n <= a
                    },
                    operator: "<=",
                    category: o.operator,
                    descriptionMessage: a.smallerEq,
                    signatures: f,
                    examples: ["10 <= 8 == false", "8 <= 8 == true"]
                }
            };

            function x(e) {
                if (b.hasOwnProperty(e)) return b[e]
            }
            let b = {
                concat: {
                    name: "concat",
                    apply: e => e ? e.join("") : void 0,
                    category: o.function,
                    descriptionMessage: a.concat,
                    signatures: [{
                        resultType: "text",
                        variadic: "text"
                    }],
                    examples: ['"dog" +"go" == "doggo"', 'concat("dog", "go") == "doggo"']
                },
                join: {
                    name: "join",
                    apply: e => e ? e.slice(1).join(e[0]) : void 0,
                    category: o.function,
                    descriptionMessage: a.join,
                    signatures: [{
                        resultType: "text",
                        variadic: "text"
                    }],
                    examples: ['join("-", "a", "b", "c") == "a-b-c"']
                },
                slice: {
                    name: "slice",
                    apply: e => e && e[0] ? e[0].slice(e[1], e[2]) : void 0,
                    category: o.function,
                    descriptionMessage: a.slice,
                    signatures: [{
                        resultType: "text",
                        arity: ["text", "number"]
                    }, {
                        resultType: "text",
                        arity: ["text", "number", "number"]
                    }],
                    examples: ['slice("Hello world", 1, 5) == "ello"', 'slice("notion", 3) == "ion"']
                },
                length: {
                    name: "length",
                    apply: e => e[0] ? e[0].length : 0,
                    category: o.function,
                    descriptionMessage: a.length,
                    signatures: [{
                        resultType: "number",
                        arity: ["text"]
                    }],
                    examples: ['length("Hello world") == 11']
                },
                format: {
                    name: "format",
                    apply: (e, t, n) => {
                        let a = e[0];
                        return r(943003).kC(a) ? (0, r(850640).ZF)({
                            value: a,
                            userTimeZone: t,
                            allowRelativeDates: !1,
                            intl: n
                        }) : void 0 !== a ? a.toString() : void 0
                    },
                    category: o.function,
                    descriptionMessage: a.format,
                    signatures: [{
                        resultType: "text",
                        arity: ["number"]
                    }, {
                        resultType: "text",
                        arity: ["checkbox"]
                    }, {
                        resultType: "text",
                        arity: ["date"]
                    }, {
                        resultType: "text",
                        arity: ["text"]
                    }],
                    examples: ['format(42) == "42"', 'format(true) == "true"', 'format(now()) == "December 31, 1969 16:00 (PST)"']
                },
                toNumber: {
                    name: "toNumber",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).AA(n, t).start.valueOf();
                        if ("boolean" == typeof n) return +!!n;
                        if ("string" == typeof n) {
                            let e = parseFloat(n);
                            return r(627179).Et(e) ? e : void 0
                        }
                        if (r(627179).Et(n)) return n
                    },
                    category: o.function,
                    descriptionMessage: a.toNumber,
                    signatures: [{
                        resultType: "number",
                        arity: ["text"]
                    }, {
                        resultType: "number",
                        arity: ["number"]
                    }, {
                        resultType: "number",
                        arity: ["checkbox"]
                    }, {
                        resultType: "number",
                        arity: ["date"]
                    }],
                    examples: ['toNumber("42") == 42', "toNumber(false) == 0"]
                },
                contains: {
                    name: "contains",
                    apply: e => !!(e[0] && e[0].includes(e[1])),
                    category: o.function,
                    descriptionMessage: a.contains,
                    signatures: [{
                        resultType: "checkbox",
                        arity: ["text", "text"]
                    }],
                    examples: ['contains("notion", "ion") == true']
                },
                replace: {
                    name: "replace",
                    apply: e => {
                        try {
                            let t = e[0] ? e[0].toString() : "";
                            return e[1] ? t.replace(new RegExp(e[1]), e[2] || "") : ""
                        } catch (e) {
                            return
                        }
                    },
                    category: o.function,
                    descriptionMessage: a.replace,
                    signatures: [{
                        resultType: "text",
                        arity: ["number", "text", "text"]
                    }, {
                        resultType: "text",
                        arity: ["text", "text", "text"]
                    }, {
                        resultType: "text",
                        arity: ["checkbox", "text", "text"]
                    }],
                    examples: ['replace("1-2-3", "-", "!") == "1!2-3"']
                },
                replaceAll: {
                    name: "replaceAll",
                    apply: e => {
                        try {
                            let t = e[0] ? e[0].toString() : "";
                            return e[1] ? t.replace(RegExp(e[1], "g"), e[2] || "") : ""
                        } catch (e) {
                            return
                        }
                    },
                    category: o.function,
                    descriptionMessage: a.replaceAll,
                    signatures: [{
                        resultType: "text",
                        arity: ["number", "text", "text"]
                    }, {
                        resultType: "text",
                        arity: ["text", "text", "text"]
                    }, {
                        resultType: "text",
                        arity: ["checkbox", "text", "text"]
                    }],
                    examples: ['replaceAll("1-2-3", "-", "!") == "1!2!3"']
                },
                test: {
                    name: "test",
                    apply: e => {
                        try {
                            let t = e[0] ? e[0].toString() : "";
                            return new RegExp(e[1]).test(t)
                        } catch (e) {
                            return
                        }
                    },
                    category: o.function,
                    descriptionMessage: a.test,
                    signatures: [{
                        resultType: "checkbox",
                        arity: ["number", "text"]
                    }, {
                        resultType: "checkbox",
                        arity: ["text", "text"]
                    }, {
                        resultType: "checkbox",
                        arity: ["checkbox", "text"]
                    }],
                    examples: ['test("1-2-3", "-") == true']
                },
                empty: {
                    name: "empty",
                    apply: e => !e[0],
                    category: o.function,
                    descriptionMessage: a.empty,
                    signatures: [{
                        resultType: "checkbox",
                        arity: ["number"]
                    }, {
                        resultType: "checkbox",
                        arity: ["text"]
                    }, {
                        resultType: "checkbox",
                        arity: ["checkbox"]
                    }, {
                        resultType: "checkbox",
                        arity: ["date"]
                    }],
                    examples: ['empty("") == true']
                },
                abs: {
                    name: "abs",
                    apply: e => Math.abs(e[0]),
                    category: o.function,
                    descriptionMessage: a.abs,
                    signatures: [y],
                    examples: ["abs(-3) == 3"]
                },
                cbrt: {
                    name: "cbrt",
                    apply: e => Math.cbrt(e[0]),
                    category: o.function,
                    descriptionMessage: a.cbrt,
                    signatures: [y],
                    examples: ["cbrt(8) == 2"]
                },
                ceil: {
                    name: "ceil",
                    apply: e => Math.ceil(e[0]),
                    category: o.function,
                    descriptionMessage: a.ceil,
                    signatures: [y],
                    examples: ["ceil(4.2) == 5"]
                },
                exp: {
                    name: "exp",
                    apply: e => Math.exp(e[0]),
                    category: o.function,
                    descriptionMessage: a.exp,
                    signatures: [y],
                    examples: ["exp(1) == 2.718281828459045"]
                },
                floor: {
                    name: "floor",
                    apply: e => Math.floor(e[0]),
                    category: o.function,
                    descriptionMessage: a.floor,
                    signatures: [y],
                    examples: ["floor(2.8) == 2"]
                },
                ln: {
                    name: "ln",
                    apply: e => Math.log(e[0]),
                    category: o.function,
                    descriptionMessage: a.ln,
                    signatures: [y],
                    examples: ["ln(e) == 1"]
                },
                log10: {
                    name: "log10",
                    apply: e => Math.log10(e[0]),
                    category: o.function,
                    descriptionMessage: a.log10,
                    signatures: [y],
                    examples: ["log10(1000) == 3"]
                },
                log2: {
                    name: "log2",
                    apply: e => Math.log2(e[0]),
                    category: o.function,
                    descriptionMessage: a.log2,
                    signatures: [y],
                    examples: ["log2(64) == 6"]
                },
                max: {
                    name: "max",
                    apply: e => Math.max.apply(void 0, e),
                    category: o.function,
                    descriptionMessage: a.max,
                    signatures: [{
                        resultType: "number",
                        variadic: "number"
                    }],
                    examples: ["max(5, 2, 9, 3) == 9"]
                },
                min: {
                    name: "min",
                    apply: e => Math.min.apply(void 0, e),
                    category: o.function,
                    descriptionMessage: a.min,
                    signatures: [{
                        resultType: "number",
                        variadic: "number"
                    }],
                    examples: ["min(4, 1, 5, 3) == 1"]
                },
                round: {
                    name: "round",
                    apply: e => Math.round(e[0]),
                    category: o.function,
                    descriptionMessage: a.round,
                    signatures: [y],
                    examples: ["round(4.4) == 4", "round(4.5) == 5"]
                },
                sign: {
                    name: "sign",
                    apply: e => Math.sign(e[0]),
                    category: o.function,
                    descriptionMessage: a.sign,
                    signatures: [y],
                    examples: ["sign(4) == 1", "sign(-9) == -1", "sign(0) == 0"]
                },
                sqrt: {
                    name: "sqrt",
                    apply: e => Math.sqrt(e[0]),
                    category: o.function,
                    descriptionMessage: a.sqrt,
                    signatures: [y],
                    examples: ["sqrt(144) == 12"]
                },
                start: {
                    name: "start",
                    apply: e => {
                        let t = e[0];
                        if (r(943003).kC(t))
                            if ("daterange" === t.type) return {
                                type: "date",
                                start_date: t.start_date
                            };
                            else if ("datetimerange" === t.type) return {
                            type: "datetime",
                            start_date: t.start_date,
                            start_time: t.start_time,
                            time_zone: t.time_zone
                        };
                        else return t
                    },
                    category: o.function,
                    descriptionMessage: a.start,
                    signatures: [c],
                    examples: ['start(prop("Date")) == Feb 2, 1996']
                },
                end: {
                    name: "end",
                    apply: e => {
                        let t = e[0];
                        if (r(943003).kC(t))
                            if ("daterange" === t.type) return {
                                type: "date",
                                start_date: t.end_date
                            };
                            else if ("datetimerange" === t.type) return {
                            type: "datetime",
                            start_date: t.end_date,
                            start_time: t.end_time,
                            time_zone: t.time_zone,
                            reminder: t.reminder
                        };
                        else return t
                    },
                    category: o.function,
                    descriptionMessage: a.end,
                    signatures: [c],
                    examples: ['end(prop("Date")) == Feb 2, 1996']
                },
                now: {
                    name: "now",
                    apply: (e, t) => r(25825).T_(t),
                    category: o.function,
                    descriptionMessage: a.now,
                    signatures: [{
                        resultType: "date",
                        arity: []
                    }],
                    examples: ["now() == Feb 2, 1996"]
                },
                timestamp: {
                    name: "timestamp",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).AA(n, t).start.valueOf()
                    },
                    category: o.function,
                    descriptionMessage: a.timestamp,
                    signatures: [m],
                    examples: ["timestamp(now()) == 1512593154718"]
                },
                fromTimestamp: {
                    name: "fromTimestamp",
                    apply: (e, t) => r(627179).Et(e[0]) ? r(25825).KQ(e[0], t) : void 0,
                    category: o.function,
                    descriptionMessage: a.fromTimestamp,
                    signatures: [{
                        resultType: "date",
                        arity: ["number"]
                    }],
                    examples: ["fromTimestamp(2000000000000) == Tue May 17 2033"]
                },
                dateAdd: {
                    name: "dateAdd",
                    apply: (e, t) => {
                        let [n, a, o] = e;
                        if (!n || !r(627179).Et(a) || 0 > i.indexOf(o)) return;
                        let s = r(25825).AA(n, t).start.plus({
                            [o]: a
                        }).valueOf();
                        return "datetime" === n.type || "datetimerange" === n.type ? r(25825).KQ(s, n.time_zone) : r(25825).p6(s, t)
                    },
                    category: o.function,
                    descriptionMessage: a.dateAdd,
                    signatures: [{
                        resultType: "date",
                        arity: ["date", "number", "text"]
                    }],
                    examples: i.map(e => `dateAdd(date, amount, "${e}")`)
                },
                dateSubtract: {
                    name: "dateSubtract",
                    apply: (e, t) => {
                        let [n, a, o] = e;
                        if (!n || !r(627179).Et(a) || 0 > i.indexOf(o)) return;
                        let s = r(25825).AA(n, t).start.minus({
                            [o]: a
                        }).valueOf();
                        return "datetime" === n.type || "datetimerange" === n.type ? r(25825).KQ(s, n.time_zone) : r(25825).p6(s, t)
                    },
                    category: o.function,
                    descriptionMessage: a.dateSubtract,
                    signatures: [{
                        resultType: "date",
                        arity: ["date", "number", "text"]
                    }],
                    examples: i.map(e => `dateSubtract(date, amount, "${e}")`)
                },
                dateBetween: {
                    name: "dateBetween",
                    apply: (e, t) => {
                        let [n, a, o] = e;
                        if (!n || !a || 0 > i.indexOf(o)) return;
                        let s = r(25825).AA(n, t).start,
                            u = r(25825).AA(a, t).start;
                        return Math.trunc(s.diff(u, o).get(o))
                    },
                    category: o.function,
                    descriptionMessage: a.dateBetween,
                    signatures: [{
                        resultType: "number",
                        arity: ["date", "date", "text"]
                    }],
                    examples: i.map(e => `dateBetween(date, date2, "${e}")`)
                },
                formatDate: {
                    name: "formatDate",
                    apply: (e, t, n) => {
                        let [a, o] = e;
                        if (a && o) {
                            let e = r(25825).AA(a, t, n.locale).start;
                            return (0, r(564433).u)(e, o)
                        }
                    },
                    category: o.function,
                    descriptionMessage: a.formatDate,
                    signatures: [{
                        resultType: "text",
                        arity: ["date", "text"]
                    }],
                    examples: ['formatDate(now(), "MMMM D YYYY, HH:mm") == March 30 2010, 12:00', 'formatDate(now(), "YYYY/MM/DD, HH:mm") == 2010/03/30, 12:00', 'formatDate(now(), "MM/DD/YYYY, HH:mm") == 03/30/2010, 12:00', 'formatDate(now(), "HH:mm A") == 12:00 PM', 'formatDate(now(), "M/D/YY") == 3/30/10']
                },
                minute: {
                    name: "minute",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).AA(n, t).start.minute
                    },
                    category: o.function,
                    descriptionMessage: a.minute,
                    signatures: [m],
                    examples: ["minute(now()) == 45"]
                },
                hour: {
                    name: "hour",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).AA(n, t).start.hour
                    },
                    category: o.function,
                    descriptionMessage: a.hour,
                    signatures: [m],
                    examples: ["hour(now()) == 17"]
                },
                day: {
                    name: "day",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).bO(r(25825).AA(n, t).start)
                    },
                    category: o.function,
                    descriptionMessage: a.day,
                    signatures: [m],
                    examples: ["day(now()) == 3"]
                },
                date: {
                    name: "date",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).AA(n, t).start.day
                    },
                    category: o.function,
                    descriptionMessage: a.date,
                    signatures: [m],
                    examples: ["date(now()) == 13"]
                },
                month: {
                    name: "month",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).AA(n, t).start.month - 1
                    },
                    category: o.function,
                    descriptionMessage: a.month,
                    signatures: [m],
                    examples: ["month(now()) == 11"]
                },
                year: {
                    name: "year",
                    apply: (e, t) => {
                        let n = e[0];
                        if (r(943003).kC(n)) return r(25825).AA(n, t).start.year
                    },
                    category: o.function,
                    descriptionMessage: a.year,
                    signatures: [m],
                    examples: ["year(now()) == 1984"]
                },
                id: {
                    name: "id",
                    apply: (e, t, n, a) => (0, r(4962).Xw)(a.id),
                    category: o.function,
                    descriptionMessage: a.id,
                    signatures: [{
                        resultType: "text",
                        arity: []
                    }],
                    examples: [`id() == "${(0,r(4962).Xw)(r(92513).JW())}"`]
                }
            }
        },
        859848: (e, t, r) => {
            r.d(t, {
                Jb: () => s,
                lg: () => a,
                sr: () => n
            }), r(16280), r(581454);
            let n = {
                    slice: "substring",
                    start: "dateStart",
                    end: "dateEnd"
                },
                a = {
                    unaryMinus: "-",
                    unaryPlus: "+",
                    larger: ">",
                    largerEq: ">=",
                    smaller: "<",
                    smallerEq: "<="
                },
                o = ["add", "subtract", "multiply", "divide", "pow", "mod", "equal", "unequal", "larger", "largerEq", "smaller", "smallerEq"];

            function i(e, t, r) {
                var n;
                return n = s(e, t, r), "conditional" === e.type || "function" === e.type && (o.includes(e.name) || ["unaryPlus", "unaryMinus"].includes(e.name)) || "operator" === e.type && void 0 !== e.args && e.args.length >= 2 ? [
                    ["("], ...n, [")"]
                ] : n
            }

            function s(e, t, a) {
                switch (e.type) {
                    case "conditional":
                        return [
                            ["if("], ...i(e.condition, t, a), [", "], ...i(e.true, t, a), [", "], ...i(e.false, t, a), [")"]
                        ];
                    case "constant":
                        switch (e.value_type) {
                            case "number":
                                return (0, r(247438).x9d)(`${e.value}`);
                            case "string":
                                let u = e.value.replace(/\n/g, "\\n").replace(/"/g, '\\"').replace(/\t/g, "\\t");
                                return (0, r(247438).x9d)(`"${u}"`);
                            case "boolean":
                                return (0, r(247438).x9d)(`${e.value?"true":"false"}`);
                            default:
                                throw Error(`unexpected constant type: ${e.value_type}`)
                        }
                    case "function":
                        if (o.includes(e.name)) {
                            let n = "equal" === e.name ? "==" : "concat" === e.name ? "+" : r(825085).II[e.name].operator;
                            return [...i(e.args[0], t, a), [` ${n} `], ...i(e.args[1], t, a)]
                        }
                        switch (e.name) {
                            case "unaryMinus":
                                return [
                                    ["-"], ...i(e.args[0], t, a)
                                ];
                            case "unaryPlus":
                                return [
                                    ["toNumber("], ...s(e.args[0], t, a), [")"]
                                ];
                            case "month":
                                return [
                                    ["month("], ...s(e.args[0], t, a), [") - 1"]
                                ];
                            case "day":
                                return [
                                    ["day("], ...s(e.args[0], t, a), [") % 7"]
                                ];
                            case "concat":
                                return [
                                    ["("], ...(0, r(405843).G)((e.args ? ? []).map(e => s(e, t, a)), () => [
                                        [" + "]
                                    ]).flat(), [")"]
                                ];
                            case "join":
                                return [
                                    ["join("],
                                    ["["], ...(0, r(405843).G)((e.args ? ? []).slice(1).map(e => s(e, t, a)), () => [
                                        [", "]
                                    ]).flat(), ["]"],
                                    [", "], ...s(e.args[0], t, a), [")"]
                                ];
                            default:
                                if ("id" === e.name) return (0, r(247438).x9d)("id()");
                                let l = n[e.name] ? ? e.name;
                                if (void 0 === r(137938).LP[l]) throw Error(`unexpected formula: ${l}`);
                                return [
                                    [`${l}(`], ...(0, r(405843).G)((e.args ? ? []).map(e => s(e, t, a)), () => [
                                        [", "]
                                    ]).flat(), [")"]
                                ]
                        }
                    case "operator":
                        var p, d;
                        if ((null == (p = e.args) ? void 0 : p.length) === 1) switch (e.operator) {
                            case "not":
                                return [
                                    ["!"], ...i(e.args[0], t, a)
                                ];
                            case "+":
                                return [
                                    ["toNumber("], ...s(e.args[0], t, a), [")"]
                                ];
                            default:
                                return [
                                    [`${e.operator}`], ...i(e.args[0], t, a)
                                ]
                        }
                        if ((null == (d = e.args) ? void 0 : d.length) === 2) return [...i(e.args[0], t, a), [` ${e.operator} `], ...i(e.args[1], t, a)];
                        if ("?" === e.operator) return [...i(e.args[0], t, a), [" ? "], ...i(e.args[0], t, a), [" : "], ...i(e.args[0], t, a)];
                        throw Error(`unhandled operator: ${e.operator}`);
                    case "symbol":
                        switch (e.name) {
                            case "pi":
                                return (0, r(247438).x9d)("pi()");
                            case "e":
                                return (0, r(247438).x9d)("e()");
                            case "true":
                                return (0, r(247438).x9d)("true");
                            case "false":
                                return (0, r(247438).x9d)("false");
                            default:
                                throw Error(`unexpected constant: ${e.name}`)
                        }
                    case "property":
                        {
                            let n = a[e.id];
                            if (void 0 === n) return [
                                [e.name]
                            ];
                            let o = (0, r(247438).wmz)((0, r(247438).ESw)({
                                collection: t,
                                property: e.id,
                                name: n.name
                            }));
                            switch (n.type) {
                                case "person":
                                case "relation":
                                    return [
                                        ["join(map("], o, [', format(current)), ", ")']
                                    ];
                                case "rollup":
                                    if (n.aggregation && "show_unique" !== n.aggregation) return [o];
                                    return [
                                        ["join(map("], o, [', format(current)), ",")']
                                    ];
                                case "file":
                                case "multi_select":
                                    return [
                                        ["join("], o, [', ", ")']
                                    ];
                                case "auto_increment_id":
                                    return [o, [".split('-').last().toNumber()"]];
                                default:
                                    return [o]
                            }
                        }
                    case "error":
                        throw Error("unexpected formula error node")
                }
            }
        },
        888085: (e, t, r) => {
            r.d(t, {
                Ps: () => p,
                Q7: () => u,
                TM: () => o,
                _M: () => s,
                p8: () => a
            }), r(16280), r(269479);
            var n = () => r(303151);
            let a = r(381453).Bj(() => {
                    var e;
                    let t, a, o, i, s, u, l, p, d, y, c, m, f, h, g, v, x, b, k, T, w, M, N, E, I, A, C, R, P, F, S, O, L, _, D, U, B;
                    return t = (0, n().Ey)({
                        name: "AdditionOperator",
                        pattern: n().JG.NA
                    }), a = (0, n().Ey)({
                        name: "UnaryOperator",
                        pattern: n().JG.NA
                    }), o = (0, n().Ey)({
                        name: "Plus",
                        pattern: /\+/,
                        categories: t
                    }), i = (0, n().Ey)({
                        name: "Minus",
                        pattern: /-/,
                        categories: [t, a]
                    }), s = (0, n().Ey)({
                        name: "ExclamationPoint",
                        pattern: /!/,
                        categories: a
                    }), u = (0, n().Ey)({
                        name: "MultiplicationOperator",
                        pattern: n().JG.NA
                    }), l = (0, n().Ey)({
                        name: "Multi",
                        pattern: /\*/,
                        categories: u
                    }), p = (0, n().Ey)({
                        name: "Div",
                        pattern: /\//,
                        categories: u
                    }), d = (0, n().Ey)({
                        name: "Modulo",
                        pattern: /%/,
                        categories: u
                    }), y = (0, n().Ey)({
                        name: "Caret",
                        pattern: /\^/
                    }), c = (0, n().Ey)({
                        name: "BooleanLiteral",
                        pattern: n().JG.NA
                    }), m = (0, n().Ey)({
                        name: "True",
                        pattern: /true/i,
                        categories: c
                    }), f = (0, n().Ey)({
                        name: "False",
                        pattern: /false/i,
                        categories: c
                    }), h = (0, n().Ey)({
                        name: "And",
                        pattern: /and(?=\s)|&&/i
                    }), g = (0, n().Ey)({
                        name: "Or",
                        pattern: /or(?=\s)|\|\|/i
                    }), v = (0, n().Ey)({
                        name: "Not",
                        pattern: /not(?=\s)/i,
                        categories: a
                    }), x = (0, n().Ey)({
                        name: "RelationalOperator",
                        pattern: n().JG.NA
                    }), b = (0, n().Ey)({
                        name: "LessThan",
                        pattern: /<=?/,
                        categories: x
                    }), k = (0, n().Ey)({
                        name: "GreaterThan",
                        pattern: />=?/,
                        categories: x
                    }), T = (0, n().Ey)({
                        name: "EqualityOperator",
                        pattern: n().JG.NA
                    }), w = (0, n().Ey)({
                        name: "Equal",
                        pattern: /==/,
                        categories: T
                    }), M = (0, n().Ey)({
                        name: "NotEqual",
                        pattern: /!=/,
                        categories: T
                    }), N = (0, n().Ey)({
                        name: "LParen",
                        pattern: /\(/
                    }), E = (0, n().Ey)({
                        name: "RParen",
                        pattern: /\)/
                    }), I = (0, n().Ey)({
                        name: "LBracket",
                        pattern: /\[/
                    }), A = (0, n().Ey)({
                        name: "RBracket",
                        pattern: /\]/
                    }), C = (0, n().Ey)({
                        name: "Comma",
                        pattern: /,/
                    }), R = (0, n().Ey)({
                        name: "Dot",
                        pattern: /\./
                    }), P = (0, n().Ey)({
                        name: "QuestionMark",
                        pattern: /\?/
                    }), F = (0, n().Ey)({
                        name: "Colon",
                        pattern: /:/
                    }), S = (0, n().Ey)({
                        name: "StringLiteral",
                        pattern: /"(?:[^\\"]|\\.)*"/,
                        start_chars_hint: ['"']
                    }), O = (0, n().Ey)({
                        name: "UnclosedStringLiteral",
                        pattern: /"(?:[^\\"]|\\.)*/,
                        start_chars_hint: ['"']
                    }), L = (0, n().Ey)({
                        name: "NumberLiteral",
                        pattern: /(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/
                    }), _ = (0, n().Ey)({
                        name: "Comment",
                        pattern: /\/\*(?:[^*]|\*(?:[^\/]))*\*\//,
                        group: n().JG.SKIPPED,
                        start_chars_hint: ["/*"]
                    }), D = (0, n().Ey)({
                        name: "UnclosedComment",
                        pattern: /\/\*(?:[^*]|\*(?:[^\/]))*/,
                        group: n().JG.SKIPPED,
                        start_chars_hint: ["/*"]
                    }), U = (0, n().Ey)({
                        name: "InputToken",
                        pattern: {
                            exec: (e, t) => {
                                if (!e.startsWith(r(416901).FORMULA_TOKEN_PREFIX, t)) return null;
                                let n = e.substring(t),
                                    a = r(416901).tokenBlockPropertyOptionalCollectionPattern.exec(n);
                                if (null !== a) {
                                    let e, t = [a[0]],
                                        n = (0, r(297493).QE)(a[1]);
                                    if (void 0 !== a[2]) e = {
                                        type: r(416901).FormulaTokenType.BlockProperty,
                                        property: n,
                                        collection: {
                                            table: r(46241).V,
                                            id: a[3],
                                            spaceId: a[4]
                                        }
                                    };
                                    else {
                                        if (!r(416901).FormulaTokenSupportedBlockSystemPropertyList.includes(n)) return null;
                                        e = {
                                            type: r(416901).FormulaTokenType.BlockProperty,
                                            property: n,
                                            collection: void 0
                                        }
                                    }
                                    return t.payload = e, t
                                }
                                let o = r(416901).tokenBlockPropertyContextValueIdPattern.exec(n);
                                if (null !== o) {
                                    let e = [o[0]],
                                        t = (0, r(297493).QE)(o[1]),
                                        n = (0, r(297493).A$)(o[2]),
                                        a = (0, r(297493).e2)(e[3]);
                                    return e.payload = {
                                        contextValueId: n,
                                        property: t,
                                        type: r(416901).FormulaTokenType.BlockProperty,
                                        valueSnapshot: a
                                    }, e
                                }
                                let i = r(416901).tokenBlockPattern.exec(n);
                                if (null !== i) {
                                    let e = [i[0]];
                                    return e.payload = {
                                        type: r(416901).FormulaTokenType.Block,
                                        blockId: i[1],
                                        spaceId: void 0 !== i[2] ? i[2].substring(1) : void 0
                                    }, e
                                }
                                let s = r(416901).tokenPersonPatternForUser.exec(n);
                                if (null !== s) {
                                    let e = [s[0]];
                                    return e.payload = {
                                        type: r(416901).FormulaTokenType.Person,
                                        personInfo: {
                                            personTokenType: "user",
                                            userId: s[1]
                                        }
                                    }, e
                                }
                                let u = r(416901).tokenPersonPatternForGroup.exec(n);
                                if (null !== u) {
                                    let e = [u[0]];
                                    return e.payload = {
                                        type: r(416901).FormulaTokenType.Person,
                                        personInfo: {
                                            personTokenType: "group",
                                            groupId: u[1],
                                            spaceId: u[2]
                                        }
                                    }, e
                                }
                                let l = r(416901).tokenCheckboxPattern.exec(n);
                                if (null !== l) {
                                    let e = [l[0]];
                                    return e.payload = {
                                        type: r(416901).FormulaTokenType.Checkbox,
                                        checked: "true" === l[1]
                                    }, e
                                }
                                let p = r(416901).tokenContextValuePattern.exec(n);
                                if (null !== p) {
                                    let e = [p[0]],
                                        t = (0, r(297493).A$)(p[1]);
                                    return e.payload = {
                                        type: r(416901).FormulaTokenType.ContextValue,
                                        valueId: t
                                    }, e
                                }
                                let d = r(416901).tokenDatePattern.exec(n);
                                if (null !== d) {
                                    let e = [d[0]];
                                    return e.payload = {
                                        type: r(416901).FormulaTokenType.Date,
                                        date: (0, r(297493).P_)(d[1])
                                    }, e
                                }
                                return null
                            }
                        },
                        line_breaks: !1,
                        start_chars_hint: [r(416901).FORMULA_TOKEN_PREFIX]
                    }), B = (0, n().Ey)({
                        name: "IdentifierName",
                        pattern: (e = /[\p{Letter}_][\p{Number}\p{Letter}_]*/u, (t, r) => {
                            let n = RegExp(e.source, `${e.flags}y`);
                            return n.lastIndex = r, n.exec(t)
                        }),
                        line_breaks: !1
                    }), {
                        WhiteSpace: (0, n().Ey)({
                            name: "WhiteSpace",
                            pattern: /\s+/,
                            group: n().JG.SKIPPED
                        }),
                        NumberLiteral: L,
                        StringLiteral: S,
                        UnclosedStringLiteral: O,
                        Comment: _,
                        UnclosedComment: D,
                        InputToken: U,
                        True: m,
                        False: f,
                        And: h,
                        Or: g,
                        Not: v,
                        IdentifierName: B,
                        Equal: w,
                        NotEqual: M,
                        Plus: o,
                        Minus: i,
                        ExclamationPoint: s,
                        Multi: l,
                        Div: p,
                        Modulo: d,
                        Caret: y,
                        LParen: N,
                        RParen: E,
                        LBracket: I,
                        RBracket: A,
                        AdditionOperator: t,
                        MultiplicationOperator: u,
                        LessThan: b,
                        GreaterThan: k,
                        QuestionMark: P,
                        Colon: F,
                        Comma: C,
                        Dot: R,
                        UnaryOperator: a,
                        EqualityOperator: T,
                        RelationalOperator: x,
                        BooleanLiteral: c
                    }
                }),
                o = r(381453).Bj(e => new(n()).JG(Object.values(e)));
            class i extends n().cA {
                formulaTokens;
                c1;
                expression = this.RULE("expression", () => {
                    this.SUBRULE(this.conditionalExpression)
                });
                primaryExpression = this.RULE("primaryExpression", () => {
                    this.OR(this.c1 || (this.c1 = [{
                        ALT: () => this.SUBRULE(this.parenthesisExpression)
                    }, {
                        ALT: () => this.SUBRULE(this.arrayExpression)
                    }, {
                        ALT: () => this.CONSUME(this.formulaTokens.NumberLiteral)
                    }, {
                        ALT: () => this.CONSUME(this.formulaTokens.StringLiteral)
                    }, {
                        ALT: () => this.CONSUME(this.formulaTokens.UnclosedStringLiteral)
                    }, {
                        ALT: () => this.CONSUME(this.formulaTokens.BooleanLiteral)
                    }, {
                        ALT: () => this.CONSUME(this.formulaTokens.IdentifierName)
                    }, {
                        ALT: () => this.CONSUME(this.formulaTokens.InputToken)
                    }]))
                });
                conditionalExpression = this.RULE("conditionalExpression", () => {
                    this.SUBRULE(this.logicalOrExpression, {
                        LABEL: "condition"
                    }), this.OPTION(() => {
                        this.CONSUME(this.formulaTokens.QuestionMark), this.SUBRULE2(this.logicalOrExpression, {
                            LABEL: "expIfTrue"
                        }), this.CONSUME(this.formulaTokens.Colon), this.SUBRULE3(this.logicalOrExpression, {
                            LABEL: "expIfFalse"
                        })
                    })
                });
                logicalOrExpression = this.RULE("logicalOrExpression", () => {
                    this.SUBRULE(this.logicalAndExpression, {
                        LABEL: "lhs"
                    }), this.MANY(() => {
                        this.CONSUME(this.formulaTokens.Or), this.SUBRULE2(this.logicalAndExpression, {
                            LABEL: "rhs"
                        })
                    })
                });
                logicalAndExpression = this.RULE("logicalAndExpression", () => {
                    this.SUBRULE(this.equalityExpression, {
                        LABEL: "lhs"
                    }), this.MANY(() => {
                        this.CONSUME(this.formulaTokens.And), this.SUBRULE2(this.equalityExpression, {
                            LABEL: "rhs"
                        })
                    })
                });
                equalityExpression = this.RULE("equalityExpression", () => {
                    this.SUBRULE(this.relationalExpression, {
                        LABEL: "lhs"
                    }), this.OPTION(() => {
                        this.CONSUME(this.formulaTokens.EqualityOperator), this.SUBRULE2(this.relationalExpression, {
                            LABEL: "rhs"
                        })
                    })
                });
                relationalExpression = this.RULE("relationalExpression", () => {
                    this.SUBRULE(this.additionExpression, {
                        LABEL: "lhs"
                    }), this.OPTION(() => {
                        this.CONSUME(this.formulaTokens.RelationalOperator), this.SUBRULE2(this.additionExpression, {
                            LABEL: "rhs"
                        })
                    })
                });
                additionExpression = this.RULE("additionExpression", () => {
                    this.SUBRULE(this.multiplicationExpression, {
                        LABEL: "lhs"
                    }), this.MANY(() => {
                        this.CONSUME(this.formulaTokens.AdditionOperator), this.SUBRULE2(this.multiplicationExpression, {
                            LABEL: "rhs"
                        })
                    })
                });
                multiplicationExpression = this.RULE("multiplicationExpression", () => {
                    this.SUBRULE(this.exponentiationExpression, {
                        LABEL: "lhs"
                    }), this.MANY(() => {
                        this.CONSUME(this.formulaTokens.MultiplicationOperator), this.SUBRULE2(this.exponentiationExpression, {
                            LABEL: "rhs"
                        })
                    })
                });
                exponentiationExpression = this.RULE("exponentiationExpression", () => {
                    this.SUBRULE(this.unaryExpression, {
                        LABEL: "lhs"
                    }), this.MANY(() => {
                        this.CONSUME(this.formulaTokens.Caret), this.SUBRULE2(this.unaryExpression, {
                            LABEL: "rhs"
                        })
                    })
                });
                unaryExpression = this.RULE("unaryExpression", () => {
                    this.OPTION(() => {
                        this.CONSUME(this.formulaTokens.UnaryOperator)
                    }), this.SUBRULE(this.primaryExpression), this.MANY(() => {
                        this.SUBRULE2(this.memberCallSubExpression)
                    })
                });
                memberCallSubExpression = this.RULE("memberCallSubExpression", () => {
                    this.OR([{
                        ALT: () => this.SUBRULE(this.dotMemberExpression)
                    }, {
                        ALT: () => this.SUBRULE(this.callArguments)
                    }])
                });
                dotMemberExpression = this.RULE("dotMemberExpression", () => {
                    this.CONSUME(this.formulaTokens.Dot), this.OR([{
                        ALT: () => this.CONSUME(this.formulaTokens.IdentifierName)
                    }, {
                        GATE: () => {
                            var e;
                            let t = this.LA(1);
                            return t.tokenType === this.formulaTokens.InputToken && (null == (e = t.payload) ? void 0 : e.type) === r(416901).FormulaTokenType.BlockProperty
                        },
                        ALT: () => this.CONSUME(this.formulaTokens.InputToken)
                    }])
                });
                callArguments = this.RULE("callArguments", () => {
                    this.CONSUME(this.formulaTokens.LParen), this.OPTION(() => {
                        this.SUBRULE(this.expression), this.MANY(() => {
                            this.CONSUME(this.formulaTokens.Comma), this.SUBRULE2(this.expression)
                        })
                    }), this.CONSUME(this.formulaTokens.RParen)
                });
                parenthesisExpression = this.RULE("parenthesisExpression", () => {
                    this.CONSUME(this.formulaTokens.LParen), this.SUBRULE(this.expression), this.CONSUME(this.formulaTokens.RParen)
                });
                arrayExpression = this.RULE("arrayExpression", () => {
                    this.CONSUME(this.formulaTokens.LBracket), this.OPTION(() => {
                        this.SUBRULE(this.expression), this.MANY(() => {
                            this.CONSUME(this.formulaTokens.Comma), this.SUBRULE2(this.expression)
                        })
                    }), this.CONSUME(this.formulaTokens.RBracket)
                });
                constructor(e) {
                    super(Object.values(e), {
                        recoveryEnabled: !0,
                        nodeLocationTracking: "onlyOffset"
                    }), this.formulaTokens = e, this.performSelfAnalysis()
                }
            }
            let s = r(381453).Bj(e => new i(e));

            function u(e) {
                let t = /unexpected character: ->(.+)<- at offset/.exec(e.message);
                if (null !== t) return {
                    type: r(944897).M9.InvalidCharacter,
                    character: t[1],
                    offset: e.offset
                };
                if ("unclosed string literal" === e.message) return {
                    type: r(944897).M9.UnclosedStringLiteral,
                    offset: e.offset
                };
                if ("unclosed comment" === e.message) return {
                    type: r(944897).M9.UnclosedComment,
                    offset: e.offset
                };
                throw Error(`Unhandled chevrotain recognition error: ${e.message}`)
            }
            let l = {
                RParen: ")",
                RBracket: "]",
                Colon: ":"
            };

            function p(e) {
                let t = e.token.tokenType === n().LT ? "eof" : e.token.startOffset;
                switch (e.name) {
                    case "MismatchedTokenException":
                        {
                            let n = /Expecting token of type --> (.+) <-- but found/.exec(e.message);
                            if (null !== n) {
                                let e = l[n[1]];
                                if (void 0 !== e) return {
                                    type: r(944897).M9.TokenExpected,
                                    token: e,
                                    offset: t
                                }
                            }
                            break
                        }
                    case "NoViableAltException":
                        {
                            let n = e.context.ruleStack[e.context.ruleStack.length - 1];
                            switch (n) {
                                case "primaryExpression":
                                    return {
                                        type: r(944897).M9.ExpressionExpected,
                                        offset: t
                                    };
                                case "dotMemberExpression":
                                    return {
                                        type: r(944897).M9.PropertyTokenOrFunctionExpected,
                                        offset: t
                                    }
                            }
                            throw Error(`Unhandled unviable alt: ${n}`)
                        }
                    case "NotAllInputParsedException":
                        return {
                            type: r(944897).M9.EndOfInputExpected,
                            offset: t
                        }
                }
                return {
                    type: r(944897).M9.UnexpectedError,
                    error: Error(`Unhandled chevrotain recognition error: ${e.name}`),
                    offset: t
                }
            }
        },
        892016: (e, t, r) => {
            r.d(t, {
                f: () => u
            }), r(16280), r(898992), r(672577), r(581454);
            var n = () => r(416901),
                a = () => r(944897),
                o = () => r(297493);
            let i = new RegExp(/\\([\\nt"])/g);

            function s(e) {
                return e.find(e => void 0 !== e && !isNaN(e))
            }

            function u(e) {
                let t, u, l = (t = (0, r(888085).p8)(), u = (0, r(888085)._M)(t).getBaseCstVisitorConstructor(), new class extends u {
                    constructor() {
                        super(), this.validateVisitor()
                    }
                    expression(e) {
                        return this.visit(e.conditionalExpression)
                    }
                    primaryExpression(e) {
                        if (void 0 !== e.parenthesisExpression) return this.visit(e.parenthesisExpression);
                        if (void 0 !== e.arrayExpression) return this.visit(e.arrayExpression);
                        if (void 0 !== e.NumberLiteral) return {
                            kind: a().NM.Number,
                            text: e.NumberLiteral[0].image,
                            startOffset: e.NumberLiteral[0].startOffset,
                            endOffset: e.NumberLiteral[0].endOffset
                        };
                        if (void 0 !== e.StringLiteral) {
                            let t = e.StringLiteral[0].image.slice(1, -1).replace(i, (e, t) => {
                                switch (t) {
                                    case "n":
                                        return "\n";
                                    case "t":
                                        return "	";
                                    default:
                                        return t
                                }
                            });
                            return {
                                kind: a().NM.String,
                                text: t,
                                startOffset: e.StringLiteral[0].startOffset,
                                endOffset: e.StringLiteral[0].endOffset
                            }
                        }
                        return void 0 !== e.UnclosedStringLiteral ? {
                            kind: a().NM.String,
                            text: e.UnclosedStringLiteral[0].image.substring(1, e.UnclosedStringLiteral[0].image.length),
                            startOffset: e.UnclosedStringLiteral[0].startOffset,
                            endOffset: e.UnclosedStringLiteral[0].endOffset
                        } : void 0 !== e.BooleanLiteral ? {
                            kind: a().NM.Boolean,
                            text: e.BooleanLiteral[0].image,
                            startOffset: e.BooleanLiteral[0].startOffset,
                            endOffset: e.BooleanLiteral[0].endOffset
                        } : void 0 !== e.InputToken ? {
                            kind: a().NM.NotionToken,
                            token: e.InputToken[0].payload,
                            startOffset: e.InputToken[0].startOffset,
                            endOffset: e.InputToken[0].endOffset
                        } : void 0 !== e.IdentifierName ? {
                            kind: a().NM.Identifier,
                            text: e.IdentifierName[0].image,
                            startOffset: e.IdentifierName[0].startOffset,
                            endOffset: e.IdentifierName[0].endOffset
                        } : {
                            kind: a().NM.RecoveryNode,
                            startOffset: -1,
                            endOffset: -1
                        }
                    }
                    conditionalExpression(e) {
                        let t = this.visit(e.condition[0]);
                        if (void 0 !== e.QuestionMark) {
                            var r, n, o, i;
                            return {
                                kind: a().NM.Conditional,
                                condition: t,
                                expIfTrue: this.visit(e.expIfTrue[0]),
                                expIfFalse: (null == (r = e.expIfFalse) ? void 0 : r[0]) !== void 0 ? this.visit(e.expIfFalse[0]) : void 0,
                                startOffset: e.condition[0].location.startOffset,
                                endOffset: s([null == (n = e.expIfFalse) || null == (n = n[0].location) ? void 0 : n.endOffset, null == (o = e.Colon) || null == (o = o[0]) ? void 0 : o.endOffset, null == (i = e.expIfTrue[0].location) ? void 0 : i.endOffset, e.QuestionMark[0].endOffset])
                            }
                        }
                        return t
                    }
                    logicalOrExpression(e) {
                        let t = this.visit(e.lhs[0]);
                        if (void 0 !== e.Or) {
                            var r, n;
                            let o = (null == (r = e.rhs) ? void 0 : r.map(e => this.visit(e))) ? ? [];
                            return {
                                kind: a().NM.LogicalOr,
                                elements: [t, ...o],
                                startOffset: e.lhs[0].location.startOffset,
                                endOffset: s([null == (n = e.rhs) || null == (n = n[e.rhs.length - 1]) || null == (n = n.location) ? void 0 : n.endOffset, e.Or[0].endOffset])
                            }
                        }
                        return t
                    }
                    logicalAndExpression(e) {
                        let t = this.visit(e.lhs[0]);
                        if (void 0 !== e.And) {
                            var r, n;
                            let o = (null == (r = e.rhs) ? void 0 : r.map(e => this.visit(e))) ? ? [];
                            return {
                                kind: a().NM.LogicalAnd,
                                elements: [t, ...o],
                                startOffset: e.lhs[0].location.startOffset,
                                endOffset: s([null == (n = e.rhs) || null == (n = n[e.rhs.length - 1]) || null == (n = n.location) ? void 0 : n.endOffset, e.And[0].endOffset])
                            }
                        }
                        return t
                    }
                    equalityExpression(e) {
                        let t = this.visit(e.lhs[0]);
                        if (void 0 !== e.EqualityOperator) {
                            var r;
                            let n = e.rhs[0];
                            return {
                                kind: a().NM.Equality,
                                op: e.EqualityOperator[0].image,
                                lhs: t,
                                rhs: this.visit(n),
                                startOffset: e.lhs[0].location.startOffset,
                                endOffset: s([null == (r = n.location) ? void 0 : r.endOffset, e.EqualityOperator[0].endOffset])
                            }
                        }
                        return t
                    }
                    relationalExpression(e) {
                        let t = this.visit(e.lhs[0]);
                        if (void 0 !== e.RelationalOperator) {
                            var r;
                            let n = e.rhs[0];
                            return {
                                kind: a().NM.Relational,
                                op: e.RelationalOperator[0].image,
                                lhs: t,
                                rhs: this.visit(n),
                                startOffset: e.lhs[0].location.startOffset,
                                endOffset: s([null == (r = n.location) ? void 0 : r.endOffset, e.RelationalOperator[0].endOffset])
                            }
                        }
                        return t
                    }
                    additionExpression(e) {
                        let t = this.visit(e.lhs[0]);
                        if (void 0 !== e.AdditionOperator)
                            for (let n = 0; n < e.AdditionOperator.length; n++) {
                                var r;
                                let o = e.rhs[n];
                                t = {
                                    kind: a().NM.Additive,
                                    op: e.AdditionOperator[n].image,
                                    lhs: t,
                                    rhs: this.visit(o),
                                    startOffset: e.lhs[0].location.startOffset,
                                    endOffset: s([null == (r = o.location) ? void 0 : r.endOffset, e.AdditionOperator[n].endOffset])
                                }
                            }
                        return t
                    }
                    multiplicationExpression(e) {
                        let t = this.visit(e.lhs[0]);
                        if (void 0 !== e.MultiplicationOperator)
                            for (let n = 0; n < e.MultiplicationOperator.length; n++) {
                                var r;
                                let o = e.rhs[n];
                                t = {
                                    kind: a().NM.Multiplicative,
                                    op: e.MultiplicationOperator[n].image,
                                    lhs: t,
                                    rhs: this.visit(o),
                                    startOffset: e.lhs[0].location.startOffset,
                                    endOffset: s([null == (r = o.location) ? void 0 : r.endOffset, e.MultiplicationOperator[n].endOffset])
                                }
                            }
                        return t
                    }
                    exponentiationExpression(e) {
                        let t, r = this.visit(e.lhs[0]);
                        if (void 0 !== e.Caret) {
                            var n;
                            let o, i = e.Caret.length - 1,
                                s = null == (n = e.rhs[i].location) ? void 0 : n.endOffset;
                            (void 0 === s || isNaN(s)) && (s = e.Caret[i].endOffset);
                            for (let r = e.Caret.length - 1; r >= 0; r--) {
                                let n = e.rhs[r];
                                t = void 0 === o ? this.visit(n) : {
                                    kind: a().NM.Exponentiation,
                                    op: o,
                                    lhs: this.visit(n),
                                    rhs: t,
                                    startOffset: n.location.startOffset,
                                    endOffset: s
                                }, o = e.Caret[r].image
                            }
                            return {
                                kind: a().NM.Exponentiation,
                                op: o,
                                lhs: r,
                                rhs: t,
                                startOffset: e.lhs[0].location.startOffset,
                                endOffset: s
                            }
                        }
                        return r
                    }
                    unaryExpression(e) {
                        var t, r, i, s;
                        let u = this.visit(e.primaryExpression[0]),
                            l = e.primaryExpression[0].location.startOffset,
                            p = void 0 !== e.UnaryOperator && "-" === e.UnaryOperator[0].image && u.kind === a().NM.Number;
                        if (p && (u = {
                                kind: a().NM.Unary,
                                op: e.UnaryOperator[0].image.toLowerCase(),
                                expression: u,
                                startOffset: e.UnaryOperator[0].startOffset,
                                endOffset: u.endOffset
                            }), isNaN(l) && (l = null == (t = e.memberCallSubExpression) ? void 0 : t[0].location.startOffset), void 0 !== e.memberCallSubExpression)
                            for (let t of e.memberCallSubExpression) {
                                let e = t.location.endOffset;
                                if (void 0 !== t.children.callArguments) {
                                    let n = t.children.callArguments[0].children;
                                    u = {
                                        kind: a().NM.Call,
                                        expression: u,
                                        arguments: (null == (r = t.children.callArguments[0]) || null == (r = r.children.expression) ? void 0 : r.map(e => this.visit(e))) ? ? [],
                                        lParenOffset: n.LParen[0].startOffset,
                                        rParenOffset: null == (i = n.RParen) ? void 0 : i[0].startOffset,
                                        commaOffsets: (null == (s = n.Comma) ? void 0 : s.map(e => e.startOffset)) ? ? [],
                                        startOffset: l,
                                        endOffset: e
                                    }
                                } else if (void 0 !== t.children.dotMemberExpression) {
                                    let r = t.children.dotMemberExpression[0].children;
                                    if (void 0 !== r.IdentifierName) {
                                        let t = r.IdentifierName[0];
                                        u = {
                                            kind: a().NM.UnifiedFunctionProperty,
                                            expression: u,
                                            name: t.image,
                                            nameStartOffset: t.startOffset,
                                            nameEndOffset: t.endOffset,
                                            startOffset: l,
                                            endOffset: e
                                        }
                                    } else if (void 0 !== r.InputToken) {
                                        let t = r.InputToken[0],
                                            i = t.payload;
                                        if (i.type === n().FormulaTokenType.BlockProperty) {
                                            if ((0, o().ix)(i)) throw Error("unexpected block property context value in unaryExpression");
                                            u = {
                                                kind: a().NM.MemberBlockProperty,
                                                expression: u,
                                                propertyToken: void 0 === i.collection ? {
                                                    property: i.property,
                                                    collection: void 0
                                                } : {
                                                    property: i.property,
                                                    collection: i.collection
                                                },
                                                propertyStartOffset: t.startOffset,
                                                propertyEndOffset: t.endOffset,
                                                startOffset: l,
                                                endOffset: e
                                            }
                                        }
                                    }
                                }
                            }
                        return void 0 === e.UnaryOperator || p ? u : {
                            kind: a().NM.Unary,
                            op: e.UnaryOperator[0].image.toLowerCase().trimEnd(),
                            expression: u,
                            startOffset: e.UnaryOperator[0].startOffset,
                            endOffset: u.endOffset
                        }
                    }
                    parenthesisExpression(e) {
                        return this.visit(e.expression[0])
                    }
                    arrayExpression(e) {
                        var t, r, n, o, i;
                        return {
                            kind: a().NM.Array,
                            elements: (null == (t = e.expression) ? void 0 : t.map(e => this.visit(e))) ? ? [],
                            lBracketOffset: e.LBracket[0].startOffset,
                            rBracketOffset: null == (r = e.RBracket) ? void 0 : r[0].startOffset,
                            commaOffsets: (null == (n = e.Comma) ? void 0 : n.map(e => e.startOffset)) ? ? [],
                            startOffset: e.LBracket[0].startOffset,
                            endOffset: s([null == (o = e.RBracket) ? void 0 : o[0].endOffset, null == (i = e.expression) || null == (i = i[e.expression.length - 1]) || null == (i = i.location) ? void 0 : i.endOffset, e.LBracket[0].endOffset])
                        }
                    }
                    memberCallSubExpression(e) {
                        throw Error("unexpected memberCallSubExpression")
                    }
                    dotMemberExpression(e) {
                        throw Error("unexpected dotMemberExpression")
                    }
                    callArguments(e) {
                        throw Error("unexpected callArguments")
                    }
                });
                try {
                    return {
                        value: l.visit(e)
                    }
                } catch (e) {
                    return {
                        error: {
                            type: a().M9.UnexpectedError,
                            error: (0, r(161179).A)(e),
                            offset: 0
                        }
                    }
                }
            }
        },
        899666: (e, t, r) => {
            function n(e) {
                let t = 0,
                    r = 0;

                function n() {
                    if (t >= e.length) return !1;
                    let r = e[t];
                    if ("*" === r || "+" === r || "?" === r) return ++t < e.length && "?" === e[t] && t++, !0;
                    if ("{" === r) {
                        let r = t;
                        if (++t >= e.length || !/\d/.test(e[t])) return t = r, !1;
                        for (; t < e.length && /\d/.test(e[t]);) t++;
                        if (t < e.length && "}" === e[t]) return ++t < e.length && "?" === e[t] && t++, !0;
                        if (t < e.length && "," === e[t]) {
                            for (t++; t < e.length && /\d/.test(e[t]);) t++;
                            if (t < e.length && "}" === e[t]) return ++t < e.length && "?" === e[t] && t++, !0
                        }
                        t = r
                    }
                    return !1
                }
                return {
                    starHeight: function a() {
                        let o = 0;
                        for (; t < e.length;) {
                            let i = e[t];
                            if (")" === i) break;
                            if ("|" === i) {
                                t++;
                                continue
                            }
                            if ("\\" === i) {
                                t += 2, n() && (r++, o = Math.max(o, 1));
                                continue
                            }
                            if ("[" === i) {
                                for (++t < e.length && "^" === e[t] && t++, t < e.length && "]" === e[t] && t++; t < e.length && "]" !== e[t];) "\\" === e[t] && t++, t++;
                                t < e.length && t++, n() && (r++, o = Math.max(o, 1));
                                continue
                            }
                            if ("(" === i) {
                                t++,
                                function() {
                                    if (t >= e.length || "?" !== e[t] || ++t >= e.length) return;
                                    let r = e[t];
                                    if (":" === r || "=" === r || "!" === r) t++;
                                    else if ("<" === r)
                                        if (++t < e.length && ("=" === e[t] || "!" === e[t])) t++;
                                        else {
                                            for (; t < e.length && ">" !== e[t];) t++;
                                            t < e.length && t++
                                        }
                                }();
                                let i = a();
                                t < e.length && ")" === e[t] && t++, n() ? (r++, o = Math.max(o, i + 1)) : o = Math.max(o, i);
                                continue
                            }
                            t++, n() && (r++, o = Math.max(o, 1))
                        }
                        return o
                    }(),
                    repetitionCount: r
                }
            }

            function a(e) {
                try {
                    if (e instanceof RegExp) return e.source;
                    if ("string" == typeof e) return new RegExp(e), e;
                    return
                } catch (e) {
                    if (e instanceof SyntaxError) return;
                    throw e
                }
            }

            function o(e, t) {
                let r = (null == t ? void 0 : t.limit) ? ? 25,
                    o = a(e);
                if (void 0 === o) return !1;
                let {
                    starHeight: i,
                    repetitionCount: s
                } = n(o);
                return i <= 1 && s <= r
            }

            function i(e, t) {
                let r = (null == t ? void 0 : t.limit) ? ? 25,
                    o = a(e);
                if (void 0 === o) return;
                let {
                    starHeight: i,
                    repetitionCount: s
                } = n(o);
                return i > 1 ? "nested_quantifiers" : s > r ? "too_many_quantifiers" : void 0
            }
            r.d(t, {
                Y: () => i,
                x: () => o
            }), r(16280)
        },
        929579: (e, t, r) => {
            r.d(t, {
                y: () => z,
                _: () => H
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(430670), r(581454), r(737550);
            var n = () => r(975162),
                a = () => r(722371),
                o = () => r(416901),
                i = () => r(944897),
                s = () => r(297493);
            class u {
                root;
                _nodeCount;
                constructor(e, t) {
                    const n = t ? ? this.countNodes(e);
                    if (n > 100) {
                        const t = this.simplifyNode(e),
                            a = this.countNodes(t);
                        a > 100 ? (r(773352).log({
                            level: "info",
                            from: "ExistenceGuarantees",
                            type: "formulaTypecheckComplexityBailout",
                            data: {
                                miscDataToConvertToString: {
                                    nodeCount: n,
                                    simplifiedNodeCount: a,
                                    maxNodeCount: 100
                                }
                            }
                        }), this.root = {
                            type: "assumeAllExist"
                        }, this._nodeCount = 1) : (this.root = t, this._nodeCount = a)
                    } else this.root = e, this._nodeCount = n
                }
                static empty() {
                    return new u({
                        type: "empty"
                    }, 1)
                }
                static impossible() {
                    return new u({
                        type: "impossible"
                    }, 1)
                }
                static fromProperty(e, t) {
                    return new u({
                        type: "leaf",
                        propertyId: e,
                        value: t
                    }, 1)
                }
                static fromMap(e) {
                    if (!e || 0 === e.size) return u.empty();
                    let t = Array.from(e.entries()),
                        r = {
                            type: "leaf",
                            propertyId: t[0][0],
                            value: t[0][1]
                        };
                    for (let e = 1; e < t.length; e++) r = {
                        type: "and",
                        left: r,
                        right: {
                            type: "leaf",
                            propertyId: t[e][0],
                            value: t[e][1]
                        }
                    };
                    return new u(r, 2 * t.length - 1)
                }
                get(e) {
                    return this.getFromNode(this.root, e)
                }
                and(e) {
                    if (this.isEmpty()) return e;
                    if (e.isEmpty()) return this;
                    let t = 1 + this._nodeCount + e._nodeCount;
                    return new u({
                        type: "and",
                        left: this.root,
                        right: e.root
                    }, t)
                }
                or(e) {
                    if (this.isEmpty()) return e;
                    if (e.isEmpty()) return this;
                    let t = 1 + this._nodeCount + e._nodeCount;
                    return new u({
                        type: "or",
                        left: this.root,
                        right: e.root
                    }, t)
                }
                not() {
                    let e = 1 + this._nodeCount;
                    return new u({
                        type: "not",
                        child: this.root
                    }, e)
                }
                isEmpty() {
                    return "empty" === this.root.type
                }
                isImpossible() {
                    return "impossible" === this.root.type
                }
                toMap() {
                    let e = new Map;
                    if (this.extractConjunctionToMap(this.root, e)) return e.size > 0 ? e : void 0
                }* entries() {
                    let e = new Set;
                    yield* this.collectLeafEntries(this.root, e)
                }* collectLeafEntries(e, t) {
                    switch (e.type) {
                        case "empty":
                        case "impossible":
                            break;
                        case "leaf":
                            t.has(e.propertyId) || (t.add(e.propertyId), yield [e.propertyId, e.value]);
                            break;
                        case "and":
                            yield* this.collectLeafEntries(e.left, t), yield* this.collectLeafEntries(e.right, t);
                            break;
                        case "or":
                            {
                                let r = new Map,
                                    n = new Map;
                                for (let [t, n] of this.collectLeafEntries(e.left, new Set)) r.set(t, n);
                                for (let [t, r] of this.collectLeafEntries(e.right, new Set)) n.set(t, r);
                                for (let [e, a] of r) {
                                    if (t.has(e)) continue;
                                    let r = n.get(e);
                                    void 0 !== r && r === a && (t.add(e), yield [e, a])
                                }
                            }
                            break;
                        case "not":
                            if ("and" === e.child.type);
                            else if ("or" === e.child.type) {
                                for (let [r, n] of this.collectLeafEntries(e.child.left, new Set)) t.has(r) || (t.add(r), "boolean" == typeof n ? yield [r, !n]: yield [r, n]);
                                for (let [r, n] of this.collectLeafEntries(e.child.right, new Set)) t.has(r) || (t.add(r), "boolean" == typeof n ? yield [r, !n]: yield [r, n])
                            } else
                                for (let [r, n] of this.collectLeafEntries(e.child, new Set)) t.has(r) || (t.add(r), "boolean" == typeof n ? yield [r, !n]: yield [r, n])
                    }
                }
                toString() {
                    return this.nodeToString(this.root)
                }
                getFromNode(e, t) {
                    switch (e.type) {
                        case "empty":
                        case "impossible":
                            return;
                        case "assumeAllExist":
                            return !0;
                        case "leaf":
                            return e.propertyId === t ? e.value : void 0;
                        case "and":
                            {
                                if (this.hasContradictionInAnd(e)) return;
                                let r = this.getFromNode(e.left, t),
                                    n = this.getFromNode(e.right, t);
                                if (void 0 !== r && void 0 !== n) return r === n ? r : void 0;
                                return r ? ? n
                            }
                        case "or":
                            {
                                let r = this.getFromNode(e.left, t),
                                    n = this.getFromNode(e.right, t);
                                if (void 0 !== r && void 0 !== n && r === n) return r;
                                return
                            }
                        case "not":
                            {
                                let r = e.child;
                                if ("and" === r.type) return;
                                if ("or" === r.type) {
                                    let e = this.getFromNode(r.left, t),
                                        n = this.getFromNode(r.right, t);
                                    if (void 0 !== e && void 0 !== n && "boolean" == typeof e && "boolean" == typeof n) return e === n ? !e : void 0;
                                    if (void 0 !== e && "boolean" == typeof e) return !e;
                                    if (void 0 !== n && "boolean" == typeof n) return !n;
                                    return
                                }
                                if ("not" === r.type) return this.getFromNode(r.child, t);
                                let n = this.getFromNode(r, t);
                                if (void 0 === n) return;
                                if ("boolean" == typeof n) return !n;
                                return "unknown"
                            }
                    }
                }
                simplifyNode(e) {
                    switch (e.type) {
                        case "empty":
                        case "impossible":
                        case "leaf":
                        case "assumeAllExist":
                            return e;
                        case "and":
                            {
                                let t = this.simplifyNode(e.left),
                                    r = this.simplifyNode(e.right);
                                if ("impossible" === t.type || "impossible" === r.type) return {
                                    type: "impossible"
                                };
                                if ("empty" === t.type) return r;
                                if ("empty" === r.type || this.nodesEqual(t, r)) return t;
                                let n = {
                                    type: "and",
                                    left: t,
                                    right: r
                                };
                                if (this.hasContradictionInAnd(n)) return {
                                    type: "impossible"
                                };
                                return n
                            }
                        case "or":
                            {
                                let t = this.simplifyNode(e.left),
                                    r = this.simplifyNode(e.right);
                                if ("impossible" === t.type) return r;
                                if ("impossible" === r.type) return t;
                                if ("empty" === t.type) return r;
                                if ("empty" === r.type) return t;
                                if (this.areContradictory(t, r)) return {
                                    type: "empty"
                                };
                                if (this.nodesEqual(t, r)) return t;
                                return {
                                    type: "or",
                                    left: t,
                                    right: r
                                }
                            }
                        case "not":
                            {
                                let t = this.simplifyNode(e.child);
                                switch (t.type) {
                                    case "empty":
                                        return {
                                            type: "impossible"
                                        };
                                    case "impossible":
                                        return {
                                            type: "empty"
                                        };
                                    case "leaf":
                                        if ("boolean" == typeof t.value) return {
                                            type: "leaf",
                                            propertyId: t.propertyId,
                                            value: !t.value
                                        };
                                        return t;
                                    case "and":
                                        return this.simplifyNode({
                                            type: "or",
                                            left: {
                                                type: "not",
                                                child: t.left
                                            },
                                            right: {
                                                type: "not",
                                                child: t.right
                                            }
                                        });
                                    case "or":
                                        return this.simplifyNode({
                                            type: "and",
                                            left: {
                                                type: "not",
                                                child: t.left
                                            },
                                            right: {
                                                type: "not",
                                                child: t.right
                                            }
                                        });
                                    case "not":
                                        return t.child;
                                    case "assumeAllExist":
                                        return t
                                }
                            }
                    }
                }
                hasContradictionInAnd(e) {
                    let t = [];
                    this.collectAndLeaves(e, t);
                    for (let e = 0; e < t.length; e++)
                        for (let r = e + 1; r < t.length; r++)
                            if (t[e].propertyId === t[r].propertyId && "boolean" == typeof t[e].value && "boolean" == typeof t[r].value && t[e].value !== t[r].value) return !0;
                    return !1
                }
                collectAndLeaves(e, t) {
                    switch (e.type) {
                        case "leaf":
                            t.push({
                                propertyId: e.propertyId,
                                value: e.value
                            });
                            break;
                        case "and":
                            this.collectAndLeaves(e.left, t), this.collectAndLeaves(e.right, t)
                    }
                }
                areContradictory(e, t) {
                    return !!("not" === t.type && this.nodesEqual(e, t.child) || "not" === e.type && this.nodesEqual(e.child, t)) || "leaf" === e.type && "leaf" === t.type && e.propertyId === t.propertyId && "boolean" == typeof e.value && "boolean" == typeof t.value && e.value !== t.value || !1
                }
                nodesEqual(e, t) {
                    if (e.type !== t.type) return !1;
                    switch (e.type) {
                        case "empty":
                        case "impossible":
                        case "assumeAllExist":
                            return !0;
                        case "leaf":
                            return "leaf" === t.type && e.propertyId === t.propertyId && e.value === t.value;
                        case "and":
                        case "or":
                            return ("and" === t.type || "or" === t.type) && (this.nodesEqual(e.left, t.left) && this.nodesEqual(e.right, t.right) || this.nodesEqual(e.left, t.right) && this.nodesEqual(e.right, t.left));
                        case "not":
                            return "not" === t.type && this.nodesEqual(e.child, t.child)
                    }
                }
                extractConjunctionToMap(e, t) {
                    switch (e.type) {
                        case "empty":
                            return !0;
                        case "impossible":
                        case "assumeAllExist":
                        case "or":
                        case "not":
                            return !1;
                        case "leaf":
                            let r = t.get(e.propertyId);
                            if (void 0 !== r && r !== e.value) return !1;
                            return t.set(e.propertyId, e.value), !0;
                        case "and":
                            return this.extractConjunctionToMap(e.left, t) && this.extractConjunctionToMap(e.right, t)
                    }
                }
                nodeToString(e) {
                    switch (e.type) {
                        case "empty":
                            return "⊤";
                        case "impossible":
                            return "⊥";
                        case "assumeAllExist":
                            return "∀∃";
                        case "leaf":
                            {
                                let t = !1 === e.value ? "!" : "",
                                    r = "unknown" === e.value ? "?" : "";
                                return `${t}${e.propertyId}${r}`
                            }
                        case "and":
                            {
                                let t = this.nodeToString(e.left),
                                    r = this.nodeToString(e.right),
                                    n = "or" === e.left.type || "not" === e.left.type ? `(${t})` : t,
                                    a = "or" === e.right.type || "not" === e.right.type ? `(${r})` : r;
                                return `${n} ∧ ${a}`
                            }
                        case "or":
                            {
                                let t = this.nodeToString(e.left),
                                    r = this.nodeToString(e.right),
                                    n = "and" === e.left.type ? `(${t})` : t,
                                    a = "and" === e.right.type ? `(${r})` : r;
                                return `${n} ∨ ${a}`
                            }
                        case "not":
                            {
                                let t = this.nodeToString(e.child),
                                    r = "and" === e.child.type || "or" === e.child.type || "not" === e.child.type ? `(${t})` : t;
                                return `\xac${r}`
                            }
                    }
                }
                countNodes(e) {
                    switch (e.type) {
                        case "empty":
                        case "impossible":
                        case "leaf":
                        case "assumeAllExist":
                            return 1;
                        case "not":
                            return 1 + this.countNodes(e.child);
                        case "and":
                        case "or":
                            return 1 + this.countNodes(e.left) + this.countNodes(e.right)
                    }
                }
            }

            function l(e) {
                if (e) return e instanceof Map ? u.fromMap(e) : e
            }

            function p(e, t) {
                return e.kind === i().NM.NotionToken && e.token.type === o().FormulaTokenType.ContextValue ? `${e.token.valueId}:${t}` : e.kind === i().NM.Identifier ? `let_var_${e.text}:${t}` : void 0
            }

            function d(e, t) {
                if (!e && !t) return;
                if (!e) return t;
                if (!t) return e;
                let r = e.or(t);
                return r.isEmpty() || r.isImpossible() ? void 0 : r
            }

            function y(e, t) {
                if (!e && !t) return;
                if (!e) return t;
                if (!t) return e;
                let r = e.and(t);
                return r.isEmpty() ? void 0 : r
            }

            function c(e) {
                if (!e) return;
                let t = e.not();
                return t.isEmpty() ? void 0 : t
            }
            let m = "relation:",
                f = "let_var_current:";

            function h(e, t) {
                let r;
                if (!e || e.isEmpty()) return;
                let n = `${m}${t}:`;
                for (let [t, a] of e.entries())
                    if (t.startsWith(n)) {
                        let e = t.slice(n.length),
                            o = u.fromProperty(e, a);
                        r = r ? r.and(o) : o
                    }
                return r
            }

            function g(e) {
                if (e.kind === i().NM.NotionToken) {
                    let t, r = e.token;
                    if (r.type === o().FormulaTokenType.ContextValue ? t = r.valueId : r.type === o().FormulaTokenType.BlockProperty && (t = r.property), t) return u.fromProperty(t, !0)
                } else if (e.kind === i().NM.MemberBlockProperty) {
                    let t = e.propertyToken.property,
                        r = p(e.expression, t);
                    if (r) return u.fromProperty(r, !0)
                } else if (e.kind === i().NM.Unary) {
                    let t = e,
                        r = 0;
                    for (; t.kind === i().NM.Unary;)
                        if ("!" !== t.op && "not" !== t.op) return;
                        else r++, t = t.expression;
                    let n = g(t);
                    if (n)
                        if (r % 2 == 0) return n;
                        else return n.not()
                } else if (e.kind === i().NM.Call) {
                    let t = e.expression;
                    if (t.kind === i().NM.Identifier && "not" === t.text && 1 === e.arguments.length) {
                        let t = g(e.arguments[0]);
                        if (t) return t.not()
                    } else if (t.kind === i().NM.UnifiedFunctionProperty && "not" === t.name) {
                        let e = g(t.expression);
                        if (e) return e.not()
                    }
                }
            }
            let v = new Set(["filter", "map", "flatMap", "find", "findIndex", "some", "every", "sort"]),
                x = new Set(["filter", "find", "findIndex"]);

            function b(e) {
                if (e.kind !== i().NM.Identifier) throw Error("Expected identifier node");
                return `let_var_${e.text}`
            }

            function k(e, t) {
                var r;
                if (e.kind !== i().NM.Identifier) return;
                let n = b(e);
                return null == (r = t.variableConditionalGuarantees) ? void 0 : r.get(n)
            }

            function T(e, t, r) {
                return t.existenceGuarantees ? r ? t.existenceGuarantees : c(t.existenceGuarantees) : l(e)
            }

            function w(e, t) {
                let r = l(e),
                    n = r ? r.and(t) : t,
                    a = c(t);
                return {
                    trueGuarantees: n,
                    falseGuarantees: r && a ? r.and(a) : r ? ? a ? ? u.empty()
                }
            }

            function M(e, t) {
                let r, n, a = function(e, t) {
                    var r;
                    if (e.kind !== i().NM.Identifier) return;
                    let n = b(e);
                    return null == (r = t.variableConditionalGuarantees) ? void 0 : r.get(n)
                }(t.node, e);
                if (a) {
                    let {
                        trueGuarantees: t,
                        falseGuarantees: r
                    } = w(e.existenceGuarantees, a);
                    return {
                        trueGuarantees: t,
                        falseGuarantees: r,
                        directPropertyGuarantees: void 0
                    }
                }
                if (t.existenceGuarantees && !t.existenceGuarantees.isEmpty())
                    if (t.node.kind === i().NM.Identifier) {
                        let r = b(t.node),
                            n = t.existenceGuarantees.toMap();
                        if (void 0 !== n && 1 === n.size && n.has(r));
                        else {
                            let {
                                trueGuarantees: r,
                                falseGuarantees: n
                            } = w(e.existenceGuarantees, t.existenceGuarantees);
                            return {
                                trueGuarantees: r,
                                falseGuarantees: n,
                                directPropertyGuarantees: void 0
                            }
                        }
                    } else {
                        let {
                            trueGuarantees: r,
                            falseGuarantees: n
                        } = w(e.existenceGuarantees, t.existenceGuarantees);
                        return {
                            trueGuarantees: r,
                            falseGuarantees: n,
                            directPropertyGuarantees: void 0
                        }
                    }
                if (t.node.kind === i().NM.Identifier) {
                    let r = b(t.node),
                        n = u.fromProperty(r, !0),
                        {
                            trueGuarantees: a,
                            falseGuarantees: o
                        } = w(e.existenceGuarantees, n);
                    return {
                        trueGuarantees: a,
                        falseGuarantees: o,
                        directPropertyGuarantees: void 0
                    }
                }
                let o = g(t.node);
                return o ? (r = o, n = c(o)) : (r = T(e.existenceGuarantees, t, !0), n = T(e.existenceGuarantees, t, !1)), {
                    trueGuarantees: r,
                    falseGuarantees: n,
                    directPropertyGuarantees: o
                }
            }

            function N(e, t) {
                return e === t ? e : "unknown"
            }

            function E(e, t, r, n, a) {
                let o = a(e, n),
                    {
                        trueGuarantees: i,
                        falseGuarantees: s,
                        directPropertyGuarantees: u
                    } = M(n, o);
                return {
                    conditionResult: o,
                    trueBranchResult: a(t, { ...n,
                        existenceGuarantees: i
                    }),
                    falseBranchResult: r ? a(r, { ...n,
                        existenceGuarantees: s
                    }) : {
                        node: { ...t,
                            exists: !0
                        },
                        errors: []
                    },
                    directPropertyGuarantees: u
                }
            }

            function I(e, t, r) {
                let n = [],
                    a = t;
                for (let o of e) {
                    let e = r(o, a);
                    n.push(e);
                    let i = g(e.node);
                    if (i) a = { ...a,
                        existenceGuarantees: i
                    }, e.existenceGuarantees = i;
                    else {
                        let r = k(o, t);
                        if (r) {
                            let t = y(l(a.existenceGuarantees), r);
                            a = { ...a,
                                existenceGuarantees: t
                            }, e.existenceGuarantees = y(e.existenceGuarantees, r)
                        } else if (e.existenceGuarantees) {
                            let t = y(l(a.existenceGuarantees), e.existenceGuarantees);
                            a = { ...a,
                                existenceGuarantees: t
                            }
                        }
                    }
                }
                return n
            }

            function A(e, t, r) {
                let n = [],
                    a = t;
                for (let o of e) {
                    let e = r(o, a);
                    n.push(e);
                    let i = g(e.node);
                    if (i) {
                        let t = c(i);
                        a = { ...a,
                            existenceGuarantees: t
                        }, e.existenceGuarantees = i
                    } else {
                        let r = k(o, t);
                        if (r) {
                            let t = c(r),
                                n = y(l(a.existenceGuarantees), t);
                            a = { ...a,
                                existenceGuarantees: n
                            }, e.existenceGuarantees = y(e.existenceGuarantees, r)
                        } else if (e.existenceGuarantees) {
                            let t = c(e.existenceGuarantees),
                                r = y(l(a.existenceGuarantees), t);
                            a = { ...a,
                                existenceGuarantees: r
                            }
                        }
                    }
                }
                return n
            }

            function C(e) {
                var t;
                let r = null == (t = e[0]) ? void 0 : t.existenceGuarantees;
                for (let t = 1; t < e.length; t++) r = y(r, e[t].existenceGuarantees);
                return r
            }

            function R(e) {
                let t = e.filter(e => {
                    var t;
                    return (t = e.node).kind !== i().NM.Boolean || "false" !== t.text
                });
                if (0 === t.length) return;
                let r = t[0].existenceGuarantees;
                for (let e = 1; e < t.length; e++) {
                    let n = t[e].existenceGuarantees;
                    if (!r || !n) return;
                    r = d(r, n)
                }
                return r
            }

            function P(e, t, r) {
                let n = "function" === t.type.type ? t.type.libraryFunction : void 0;
                if ((null == n ? void 0 : n.name) === r)
                    if (t.kind === i().NM.UnifiedFunctionProperty) return [t.expression, ...e.arguments];
                    else if (t.kind === i().NM.Identifier) return e.arguments;
                else return
            }

            function F(e, t, r, n) {
                return t.kind === i().NM.UnifiedFunctionProperty ? {
                    node: { ...e,
                        expression: { ...t,
                            expression: r[0].node
                        },
                        arguments: r.slice(1).map(e => e.node),
                        exists: !0
                    },
                    errors: r.flatMap(e => e.errors),
                    existenceGuarantees: n
                } : {
                    node: { ...e,
                        expression: t,
                        arguments: r.map(e => e.node),
                        exists: !0
                    },
                    errors: r.flatMap(e => e.errors),
                    existenceGuarantees: n
                }
            }

            function S(e, t) {
                var n;
                return !!((0, r(511791).PJ)(t) || (null == (n = e.guaranteedPropertyIds) ? void 0 : n.has(decodeURIComponent(t))))
            }
            r(16280);
            let O = new Set(["empty", "not", "and", "or", "ifs", "if"]),
                L = new Set(["at", "first", "last", "slice", "reverse", "sort", "unique", "includes", "map", "filter", "find", "findIndex", "some", "every", "flat", "count", "length", "concat"]),
                _ = [function(e) {
                    let t, r, {
                            node: n,
                            expressionNode: a,
                            context: s,
                            addExistenceGuaranteesToFormulaASTTypes: l
                        } = e,
                        d = "function" === a.type.type ? a.type.libraryFunction : void 0;
                    if ((null == d ? void 0 : d.name) !== "empty") return;
                    if (a.kind === i().NM.UnifiedFunctionProperty ? r = a.expression : a.kind === i().NM.Identifier && (r = n.arguments[0]), r) {
                        let e = k(r, s);
                        if (e) t = c(e);
                        else if (r.kind === i().NM.NotionToken) {
                            if (r.token.type === o().FormulaTokenType.ContextValue) t = u.fromProperty(r.token.valueId, !1);
                            else if (r.token.type === o().FormulaTokenType.BlockProperty) {
                                let e = r.token.property;
                                t = u.fromProperty(e, !1)
                            }
                        } else if (r.kind === i().NM.MemberBlockProperty) {
                            let e = r.propertyToken.property,
                                n = p(r.expression, e);
                            n && (t = u.fromProperty(n, !1))
                        }
                    } else t = u.impossible();
                    let y = [];
                    if (a.kind === i().NM.UnifiedFunctionProperty);
                    else if (a.kind === i().NM.Identifier)
                        for (let e of n.arguments) {
                            let t = l(e, s);
                            y.push(t.node)
                        }
                    let m = void 0 !== r;
                    return {
                        node: { ...n,
                            expression: a,
                            arguments: y,
                            exists: m
                        },
                        errors: [],
                        existenceGuarantees: t
                    }
                }, function(e) {
                    let {
                        node: t,
                        expressionNode: r,
                        context: n,
                        addExistenceGuaranteesToFormulaASTTypes: a
                    } = e, o = "function" === r.type.type ? r.type.libraryFunction : void 0;
                    if ((null == o ? void 0 : o.name) === "not") {
                        if (r.kind === i().NM.UnifiedFunctionProperty) {
                            let e, o = a(r.expression, n),
                                i = k(o.node, n);
                            return e = i ? c(i) : c(o.existenceGuarantees), {
                                node: { ...t,
                                    expression: { ...r,
                                        expression: o.node
                                    },
                                    exists: !0
                                },
                                errors: o.errors,
                                existenceGuarantees: e
                            }
                        }
                        if (r.kind === i().NM.Identifier && 1 === t.arguments.length) {
                            let e, o = a(t.arguments[0], n),
                                i = k(o.node, n);
                            return e = i ? c(i) : c(o.existenceGuarantees), {
                                node: { ...t,
                                    expression: r,
                                    arguments: [o.node],
                                    exists: !0
                                },
                                errors: o.errors,
                                existenceGuarantees: e
                            }
                        }
                    }
                }, function(e) {
                    let {
                        node: t,
                        expressionNode: r,
                        context: n,
                        addExistenceGuaranteesToFormulaASTTypes: a
                    } = e, o = P(t, r, "and");
                    if (!o) return;
                    let i = I(o, n, a),
                        s = C(i);
                    return F(t, r, i, s)
                }, function(e) {
                    let {
                        node: t,
                        expressionNode: r,
                        context: n,
                        addExistenceGuaranteesToFormulaASTTypes: a
                    } = e, o = P(t, r, "or");
                    if (!o) return;
                    let i = A(o, n, a),
                        s = R(i);
                    return F(t, r, i, s)
                }, function(e) {
                    var t, r, n;
                    let a, o, {
                            node: s,
                            expressionNode: u,
                            context: l,
                            addExistenceGuaranteesToFormulaASTTypes: p
                        } = e,
                        d = "function" === u.type.type ? u.type.libraryFunction : void 0;
                    if ((null == d ? void 0 : d.name) !== "ifs") return;
                    let y = [],
                        c = [];
                    if (u.kind === i().NM.UnifiedFunctionProperty) {
                        y.push(u.expression);
                        for (let e = 0; e < s.arguments.length; e += 2) c.push(s.arguments[e]), e + 1 < s.arguments.length && (e + 2 < s.arguments.length ? y.push(s.arguments[e + 1]) : a = s.arguments[e + 1])
                    } else if (u.kind !== i().NM.Identifier) return;
                    else
                        for (let e = 0; e < s.arguments.length; e += 2) e + 1 < s.arguments.length ? (y.push(s.arguments[e]), c.push(s.arguments[e + 1])) : a = s.arguments[e];
                    let m = [],
                        f = [],
                        h = l.existenceGuarantees;
                    for (let e = 0; e < y.length && e < c.length; e++) {
                        let t = p(y[e], { ...l,
                            existenceGuarantees: h
                        });
                        f.push(...t.errors);
                        let {
                            trueGuarantees: r,
                            falseGuarantees: n
                        } = M({ ...l,
                            existenceGuarantees: h
                        }, t), a = p(c[e], { ...l,
                            existenceGuarantees: r
                        });
                        f.push(...a.errors), m.push({
                            conditionResult: t,
                            valueResult: a
                        }), h = n
                    }
                    if (a && (o = p(a, { ...l,
                            existenceGuarantees: h
                        }), f.push(...o.errors)), u.kind === i().NM.UnifiedFunctionProperty) {
                        let e = [];
                        for (let t = 0; t < m.length; t++) e.push(m[t].valueResult.node), t + 1 < m.length && e.push(m[t + 1].conditionResult.node);
                        return o && e.push(o.node), {
                            node: { ...s,
                                expression: { ...u,
                                    expression: (null == (t = m[0]) ? void 0 : t.conditionResult.node) || u.expression
                                },
                                arguments: e,
                                exists: !0
                            },
                            errors: f,
                            existenceGuarantees: null == (r = m[0]) ? void 0 : r.conditionResult.existenceGuarantees
                        }
                    } {
                        let e = [];
                        for (let t = 0; t < m.length; t++) e.push(m[t].conditionResult.node), e.push(m[t].valueResult.node);
                        return o && e.push(o.node), {
                            node: { ...s,
                                expression: u,
                                arguments: e,
                                exists: !0
                            },
                            errors: f,
                            existenceGuarantees: null == (n = m[0]) ? void 0 : n.conditionResult.existenceGuarantees
                        }
                    }
                }, function(e) {
                    let {
                        node: t,
                        expressionNode: r,
                        context: n,
                        addExistenceGuaranteesToFormulaASTTypes: a
                    } = e, o = function(e, t) {
                        let r = "function" === t.type.type ? t.type.libraryFunction : void 0;
                        if ((null == r ? void 0 : r.name) === "if") {
                            if (t.kind === i().NM.UnifiedFunctionProperty) return {
                                condition: t.expression,
                                trueBranch: e.arguments[0],
                                falseBranch: e.arguments[1],
                                isUnifiedProperty: !0,
                                expressionNode: t
                            };
                            else if (t.kind === i().NM.Identifier) return {
                                condition: e.arguments[0],
                                trueBranch: e.arguments[1],
                                falseBranch: e.arguments[2],
                                isUnifiedProperty: !1,
                                expressionNode: t
                            }
                        }
                    }(t, r);
                    if (!o) return;
                    let {
                        conditionResult: s,
                        trueBranchResult: u,
                        falseBranchResult: l,
                        directPropertyGuarantees: p
                    } = E(o.condition, o.trueBranch, o.falseBranch, n, a), d = o.isUnifiedProperty ? [u.node, l.node] : [s.node, u.node, l.node], y = N(u.node.exists, l.node.exists);
                    return {
                        node: { ...t,
                            expression: o.expressionNode,
                            arguments: d,
                            exists: y
                        },
                        errors: [...s.errors, ...u.errors, ...l.errors],
                        existenceGuarantees: p ? ? s.existenceGuarantees
                    }
                }, function(e) {
                    let {
                        node: t,
                        expressionNode: r,
                        context: n,
                        addExistenceGuaranteesToFormulaASTTypes: a
                    } = e, o = function(e, t) {
                        let r = "function" === t.type.type ? t.type.libraryFunction : void 0;
                        if ((null == r ? void 0 : r.name) !== "let" && (null == r ? void 0 : r.name) !== "lets" || e.arguments.length < 3 || e.arguments.length % 2 == 0) return;
                        let n = [];
                        for (let t = 0; t < e.arguments.length - 1; t += 2) {
                            let r = e.arguments[t],
                                a = e.arguments[t + 1];
                            if (r.kind !== i().NM.Identifier) return;
                            n.push({
                                variableName: r,
                                valueExpression: a
                            })
                        }
                        return {
                            variableBindings: n,
                            bodyExpression: e.arguments[e.arguments.length - 1],
                            expressionNode: t
                        }
                    }(t, r);
                    if (o) return function(e, t, r, n, a) {
                        let {
                            variableBindings: o,
                            bodyExpression: i
                        } = r, s = n, p = [], d = [];
                        for (let e of o) {
                            let {
                                variableName: t,
                                valueExpression: r
                            } = e, n = a(r, s);
                            d.push(...n.errors);
                            let o = b(t),
                                i = u.fromProperty(o, n.node.exists),
                                y = l(s.existenceGuarantees),
                                c = y ? y.and(i) : i,
                                m = function(e) {
                                    if (e.existenceGuarantees) return e.existenceGuarantees;
                                    let t = g(e.node);
                                    if (t) return t
                                }(n),
                                f = new Map(s.variableConditionalGuarantees);
                            m && f.set(o, m), s = { ...s,
                                existenceGuarantees: c,
                                variableConditionalGuarantees: f
                            }, p.push({
                                variableName: t,
                                valueResult: n
                            })
                        }
                        let y = a(i, s);
                        d.push(...y.errors);
                        let c = [];
                        for (let e of p) c.push({ ...e.variableName,
                            exists: !0
                        }), c.push(e.valueResult.node);
                        return c.push(y.node), {
                            node: { ...e,
                                expression: t,
                                arguments: c,
                                exists: !0
                            },
                            errors: d,
                            existenceGuarantees: y.existenceGuarantees
                        }
                    }(t, r, o, n, a)
                }, function(e) {
                    var t;
                    let {
                        node: r,
                        expressionNode: n,
                        context: a,
                        addExistenceGuaranteesToFormulaASTTypes: o
                    } = e, i = P(r, n, "concat");
                    if (!i) return;
                    let s = [];
                    for (let e of i) {
                        let t = o(e, a);
                        s.push(t)
                    }
                    let u = null == (t = s[0]) ? void 0 : t.existenceGuarantees;
                    for (let e = 1; e < s.length; e++) {
                        let t = s[e].existenceGuarantees;
                        if (!u || !t) {
                            u = void 0;
                            break
                        }
                        u = d(u, t)
                    }
                    return F(r, n, s, u)
                }];

            function D(e, t) {
                var r, n, d, T, w, M, P, F, U, B, G, q, V;
                switch (e.kind) {
                    case i().NM.Number:
                    case i().NM.String:
                    case i().NM.Boolean:
                        return {
                            node: { ...e,
                                exists: !0
                            },
                            errors: []
                        };
                    case i().NM.NotionToken:
                        let $ = e.token;
                        switch ($.type) {
                            case o().FormulaTokenType.Checkbox:
                                return {
                                    node: { ...e,
                                        exists: !0
                                    },
                                    errors: []
                                };
                            case o().FormulaTokenType.BlockProperty:
                                let W = $.property,
                                    H = (null == (r = t.existenceGuarantees) ? void 0 : r.get(W)) ? ? "unknown";
                                return "unknown" === H && (H = !!S(t, W) || (0, s().lH)(e.type)), {
                                    node: { ...e,
                                        exists: H
                                    },
                                    errors: []
                                };
                            case o().FormulaTokenType.ContextValue:
                                return {
                                    node: { ...e,
                                        exists: function(e, t) {
                                            var r;
                                            if (null != (r = e.guaranteedPropertyIds) && r.has(decodeURIComponent(t))) return !0;
                                            let n = (0, s().GH)(t);
                                            return "global" === (0, s().y5)(n).source || "unknown"
                                        }(t, $.valueId)
                                    },
                                    errors: []
                                };
                            case o().FormulaTokenType.Block:
                            case o().FormulaTokenType.Person:
                            case o().FormulaTokenType.Date:
                                return {
                                    node: { ...e,
                                        exists: !0
                                    },
                                    errors: []
                                };
                            default:
                                return (0, a().HB)($)
                        }
                    case i().NM.Array:
                        {
                            let r = e.elements.map(e => D(e, t));
                            return {
                                node: { ...e,
                                    elements: r.map(e => e.node),
                                    exists: !0
                                },
                                errors: r.flatMap(e => e.errors)
                            }
                        }
                    case i().NM.Identifier:
                        {
                            let r = b(e),
                                o = null == (n = t.existenceGuarantees) ? void 0 : n.get(r),
                                i = null == (d = t.variableConditionalGuarantees) ? void 0 : d.get(r);
                            if ((!(0, a().O9)(o) || "unknown" === o) && i) {
                                let e = i.toMap();
                                if (e) {
                                    for (let [r, n] of e)
                                        if ("boolean" == typeof n && !0 === n) {
                                            let e = null == (T = t.existenceGuarantees) ? void 0 : T.get(r);
                                            if ((0, a().O9)(e)) {
                                                o = e;
                                                break
                                            }
                                        }
                                }
                            }
                            let s = !(0, a().O9)(o) || o,
                                u = i ? t.existenceGuarantees ? t.existenceGuarantees.and(i) : i : t.existenceGuarantees;
                            return {
                                node: { ...e,
                                    exists: s
                                },
                                errors: [],
                                existenceGuarantees: u
                            }
                        }
                    case i().NM.Conditional:
                        return function(e, t, r) {
                            let {
                                conditionResult: n,
                                trueBranchResult: a,
                                falseBranchResult: o,
                                directPropertyGuarantees: i
                            } = E(e.condition, e.expIfTrue, e.expIfFalse, t, r), s = N(a.node.exists, o.node.exists);
                            return {
                                node: { ...e,
                                    condition: n.node,
                                    expIfTrue: a.node,
                                    expIfFalse: null == o ? void 0 : o.node,
                                    exists: s
                                },
                                errors: [...n.errors, ...a.errors, ...(null == o ? void 0 : o.errors) ? ? []],
                                existenceGuarantees: i ? ? n.existenceGuarantees
                            }
                        }(e, t, D);
                    case i().NM.LogicalOr:
                        let z, Y;
                        return Y = R(z = A(e.elements, t, D)), {
                            node: { ...e,
                                elements: z.map(e => e.node),
                                exists: !0
                            },
                            errors: z.flatMap(e => e.errors),
                            existenceGuarantees: Y
                        };
                    case i().NM.LogicalAnd:
                        let Z, j;
                        return j = C(Z = I(e.elements, t, D)), {
                            node: { ...e,
                                elements: Z.map(e => e.node),
                                exists: !0
                            },
                            errors: Z.flatMap(e => e.errors),
                            existenceGuarantees: j
                        };
                    case i().NM.Equality:
                    case i().NM.Relational:
                    case i().NM.Additive:
                    case i().NM.Multiplicative:
                    case i().NM.Exponentiation:
                        {
                            let r = D(e.lhs, t),
                                n = D(e.rhs, t);
                            return {
                                node: { ...e,
                                    lhs: r.node,
                                    rhs: n.node,
                                    exists: !0
                                },
                                errors: [...r.errors, ...n.errors]
                            }
                        }
                    case i().NM.Unary:
                        let K, Q, J;
                        return Q = D(e.expression, t), K = (J = k(e.expression, t)) ? c(J) : c(Q.existenceGuarantees), {
                            node: { ...e,
                                expression: Q.node,
                                exists: !0
                            },
                            errors: Q.errors,
                            existenceGuarantees: K
                        };
                    case i().NM.Call:
                        let X, {
                                node: ee,
                                errors: et,
                                existenceGuarantees: er
                            } = D(e.expression, t),
                            en = [...et],
                            ea = "function" === ee.type.type ? ee.type.libraryFunction : void 0,
                            eo = function(e) {
                                let t, {
                                        node: r,
                                        expressionNode: n,
                                        context: a,
                                        addExistenceGuaranteesToFormulaASTTypes: o,
                                        expressionGuarantees: i
                                    } = e,
                                    s = "function" === n.type.type ? n.type.libraryFunction : void 0;
                                if (!(null != s && s.name) || !v.has(s.name)) return;
                                let p = function(e) {
                                    let t = "function" === e.type.type ? e.type.boundTargetType : void 0;
                                    if ((null == t ? void 0 : t.type) === "array") return t.sourceRelationPropertyId
                                }(n);
                                if (!p) return;
                                let d = r.arguments[0];
                                if (!d) return;
                                let c = l(a.existenceGuarantees),
                                    h = i ? c ? c.and(i) : i : c,
                                    b = function(e, t) {
                                        if (!e || e.isEmpty()) return e;
                                        let r = `${m}${t}:`,
                                            n = e;
                                        for (let [t, a] of e.entries())
                                            if (t.startsWith(r)) {
                                                let e = t.slice(r.length),
                                                    o = `${f}${e}`;
                                                n = n.and(u.fromProperty(o, a))
                                            }
                                        return n
                                    }(h, p),
                                    k = o(d, { ...a,
                                        existenceGuarantees: b
                                    }),
                                    T = [],
                                    w = [...k.errors];
                                for (let e = 1; e < r.arguments.length; e++) {
                                    let t = o(r.arguments[e], a);
                                    T.push(t.node), w.push(...t.errors)
                                }
                                if (x.has(s.name)) {
                                    let e = y(g(k.node), k.existenceGuarantees);
                                    e && (t = function(e, t, r) {
                                        let n;
                                        if (!(!t || t.isEmpty())) {
                                            for (let [a, o] of t.entries())
                                                if (a.startsWith(f)) {
                                                    let t = null == e ? void 0 : e.get(a);
                                                    if (void 0 === t || t !== o) {
                                                        let e = a.slice(f.length),
                                                            t = `${m}${r}:${e}`,
                                                            i = u.fromProperty(t, o);
                                                        n = n ? n.and(i) : i
                                                    }
                                                }
                                            return n
                                        }
                                    }(b, e, p))
                                }
                                let M = y(h, t);
                                return {
                                    node: { ...r,
                                        expression: n,
                                        arguments: [k.node, ...T],
                                        exists: !0
                                    },
                                    errors: w,
                                    existenceGuarantees: M
                                }
                            }({
                                node: e,
                                expressionNode: ee,
                                context: t,
                                addExistenceGuaranteesToFormulaASTTypes: D,
                                expressionGuarantees: er
                            });
                        if (eo) {
                            let e = eo.existenceGuarantees;
                            if ((null == ea ? void 0 : ea.name) === "find") {
                                let t = "function" === ee.type.type ? ee.type.boundTargetType : void 0;
                                if ((null == t ? void 0 : t.type) === "array") {
                                    let r = t.sourceRelationPropertyId;
                                    r && (e = y(e, h(eo.existenceGuarantees, r)))
                                }
                            }
                            return { ...eo,
                                errors: [...et, ...eo.errors],
                                existenceGuarantees: e
                            }
                        }
                        let ei = function(e, t, r, n) {
                            let a = {
                                node: e,
                                expressionNode: t,
                                context: r,
                                addExistenceGuaranteesToFormulaASTTypes: n
                            };
                            for (let e of _) {
                                let t = e(a);
                                if (t) return t
                            }
                        }(e, ee, t, D);
                        if (ei) return ei;
                        let es = [];
                        for (let r of e.arguments) {
                            let e = D(r, t);
                            es.push(e.node), en.push(...e.errors)
                        }
                        let eu = (null == ea ? void 0 : ea.name) && L.has(ea.name);
                        if (null == ea || !ea.name || O.has(ea.name) || o().TREAT_UNDEFINED_AS_ZERO_FNS.includes(ea.name) || eu || !0 === ee.exists || (X = {
                                type: i().IA.CalledFunctionOnEmptyValue,
                                node: e,
                                expression: ee,
                                libraryFunction: ea
                            }), null != ea && ea.name && !X && !O.has(ea.name) && !o().TREAT_UNDEFINED_AS_ZERO_FNS.includes(ea.name) && !eu) {
                            for (let t of es)
                                if (!0 !== t.exists) {
                                    X = {
                                        type: i().IA.CalledFunctionOnEmptyValue,
                                        node: e,
                                        expression: t,
                                        libraryFunction: ea
                                    };
                                    break
                                }
                        }
                        X && en.push(X);
                        let el = !0;
                        if ((null == ea ? void 0 : ea.name) === "empty" && 0 === es.length && (el = !1), ee.kind === i().NM.UnifiedFunctionProperty && !0 === ee.exists) {
                            let e = L.has(ee.name),
                                r = "array" === ee.expression.type.type;
                            if (e && r) {
                                let e = !1;
                                if (ee.expression.kind === i().NM.MemberBlockProperty) {
                                    let r = ee.expression.propertyToken.property,
                                        n = p(ee.expression.expression, r);
                                    n && (null == (w = t.existenceGuarantees) ? void 0 : w.get(n)) === !0 && (e = !0)
                                } else if (ee.expression.kind === i().NM.NotionToken && ee.expression.token.type === o().FormulaTokenType.BlockProperty) {
                                    let r = ee.expression.token.property;
                                    (null == (M = t.existenceGuarantees) ? void 0 : M.get(r)) === !0 && (e = !0)
                                }
                                e && (el = ee.exists)
                            }
                        }
                        if (eu && ["first", "last"].includes(ea.name)) {
                            let e = !1;
                            if (ee.kind === i().NM.MemberBlockProperty) {
                                let r = ee.propertyToken.property,
                                    n = p(ee.expression, r);
                                n && (null == (P = t.existenceGuarantees) ? void 0 : P.get(n)) === !0 && (e = !0)
                            } else if (ee.kind === i().NM.NotionToken && ee.token.type === o().FormulaTokenType.BlockProperty) {
                                let r = ee.token.property;
                                (null == (F = t.existenceGuarantees) ? void 0 : F.get(r)) === !0 && (e = !0)
                            }
                            e && (el = !0)
                        }
                        return {
                            node: { ...e,
                                expression: ee,
                                arguments: es,
                                exists: el
                            },
                            errors: en,
                            existenceGuarantees: er
                        };
                    case i().NM.UnifiedFunctionProperty:
                        let ep, ed = D(e.expression, t),
                            ey = ed.node,
                            ec = [...ed.errors],
                            em = L.has(e.name),
                            ef = "array" === ey.type.type,
                            eh = ["first", "last", "at", "find"].includes(e.name);
                        if (em && ef)
                            if (["first", "last"].includes(e.name)) {
                                let r = !1;
                                if (ey.kind === i().NM.MemberBlockProperty) {
                                    let e = ey.propertyToken.property,
                                        n = p(ey.expression, e);
                                    n && (null == (U = t.existenceGuarantees) ? void 0 : U.get(n)) === !0 && (r = !0)
                                } else if (ey.kind === i().NM.NotionToken && ey.token.type === o().FormulaTokenType.BlockProperty) {
                                    let e = ey.token.property;
                                    (null == (B = t.existenceGuarantees) ? void 0 : B.get(e)) === !0 && (r = !0)
                                }
                                ep = !!r || (0, s().lH)(e.type)
                            } else ep = (0, s().lH)(e.type);
                        else ep = ey.exists;
                        let eg = ed.existenceGuarantees;
                        if (eh && "array" === ey.type.type) {
                            let e = ey.type.sourceRelationPropertyId;
                            e && (eg = y(eg, h(ed.existenceGuarantees, e)))
                        }
                        return {
                            node: { ...e,
                                expression: ey,
                                exists: ep
                            },
                            errors: ec,
                            existenceGuarantees: eg
                        };
                    case i().NM.MemberBlockProperty:
                        let ev = D(e.expression, t),
                            ex = "unknown",
                            eb = e.propertyToken.property;
                        if (ev.node.kind === i().NM.NotionToken && ev.node.token.type === o().FormulaTokenType.ContextValue) {
                            let e = `${ev.node.token.valueId}:${eb}`;
                            ex = (null == (G = t.existenceGuarantees) ? void 0 : G.get(e)) ? ? "unknown"
                        } else if (ev.node.kind === i().NM.Identifier) {
                            let e = `let_var_${ev.node.text}:${eb}`;
                            ex = (null == (q = t.existenceGuarantees) ? void 0 : q.get(e)) ? ? "unknown"
                        }
                        return "unknown" === ex && !0 === (null == (V = ev.existenceGuarantees) ? void 0 : V.get(eb)) && (ex = !0), "unknown" === ex && (ex = !0 !== ev.node.exists ? "unknown" : !!S(t, eb) || (0, s().lH)(e.type)), {
                            node: { ...e,
                                expression: ev.node,
                                exists: ex
                            },
                            errors: [...ev.errors],
                            existenceGuarantees: ev.existenceGuarantees
                        };
                    case i().NM.RecoveryNode:
                        return {
                            node: { ...e,
                                exists: !0
                            },
                            errors: []
                        };
                    default:
                        return (0, a().HB)(e)
                }
            }
            let U = [{
                    name: o().FORMULA_PROP_WRAPPER,
                    error: i().IA.InvalidPropCall
                }, {
                    name: o().FORMULA_CONTEXT_WRAPPER,
                    error: i().IA.InvalidContextCall
                }, {
                    name: o().FORMULA_VARIABLE_WRAPPER,
                    error: i().IA.InvalidVariableCall
                }],
                B = new Set(["created_time", "last_edited_time", "created_by", "last_edited_by", "auto_increment_id"]);

            function G(e, t, r) {
                B.has(r) && (null == e || e.add(t))
            }

            function* q(e, t) {
                var r, n;
                let a = (yield {
                    recordPointers: [e]
                }).getRecordModel(e);
                if (a) {
                    let e = yield {
                        recordPointers: a.getAdditionalPropertyPointers()
                    };
                    return a.getNormalizedSchema(e.getRecordModel)
                }
                if (e.id === (null == (r = t.publicPageDataCollection) ? void 0 : r.id)) return null == (n = t.publicPageDataCollection) ? void 0 : n.schema
            }

            function* V(e, t) {
                var n, u, l, p, d, y, c, m, f, h, g;
                let {
                    valueTypes: v
                } = t;
                switch (e.kind) {
                    case i().NM.Number:
                        return {
                            node: { ...e,
                                type: {
                                    type: "number"
                                },
                                valueTypes: v
                            },
                            errors: []
                        };
                    case i().NM.String:
                        return {
                            node: { ...e,
                                type: {
                                    type: "text"
                                },
                                valueTypes: v
                            },
                            errors: []
                        };
                    case i().NM.Boolean:
                        return {
                            node: { ...e,
                                type: {
                                    type: "checkbox"
                                },
                                valueTypes: v
                            },
                            errors: []
                        };
                    case i().NM.NotionToken:
                        {
                            let c = e.token;
                            switch (c.type) {
                                case o().FormulaTokenType.Checkbox:
                                    return {
                                        node: { ...e,
                                            type: {
                                                type: "checkbox"
                                            },
                                            valueTypes: v
                                        },
                                        errors: []
                                    };
                                case o().FormulaTokenType.BlockProperty:
                                    {
                                        if ((0, s().ix)(c)) {
                                            let n = v.find(e => e.kind === o().FormulaContextValueKind.ContextValue && e.id === (0, s().GH)(c.contextValueId));
                                            if (void 0 === n) return {
                                                node: { ...e,
                                                    type: {
                                                        type: "unknown"
                                                    },
                                                    valueTypes: v
                                                },
                                                errors: [{
                                                    type: i().IA.MissingContextVariable,
                                                    node: e,
                                                    token: c
                                                }]
                                            };
                                            let a = n.type;
                                            if ("block" !== a.type) return {
                                                node: { ...e,
                                                    type: {
                                                        type: "unknown"
                                                    },
                                                    valueTypes: v
                                                },
                                                errors: [{
                                                    type: i().IA.ContextVariableNotBlockWithCollection,
                                                    node: e,
                                                    token: c
                                                }]
                                            };
                                            if (void 0 === a.collection) {
                                                let n = (0, s().Yi)(c.property);
                                                if (r(511791).PJ(n)) return {
                                                    node: { ...e,
                                                        type: o().FormulaTokenSupportedBlockSystemPropertyToType[n],
                                                        valueTypes: v
                                                    },
                                                    errors: []
                                                }; {
                                                    let r = (null == (u = t.formulaPropertyNames) ? void 0 : u.get(n)) ? ? n;
                                                    return {
                                                        node: { ...e,
                                                            type: {
                                                                type: "unknown"
                                                            },
                                                            valueTypes: v
                                                        },
                                                        errors: [{
                                                            type: i().IA.MissingPropertyOnContextVariable,
                                                            node: e,
                                                            property: r,
                                                            token: c
                                                        }]
                                                    }
                                                }
                                            }
                                            let p = (0, s().Yi)(c.property);
                                            if (r(511791).PJ(p)) return {
                                                node: { ...e,
                                                    type: o().FormulaTokenSupportedBlockSystemPropertyToType[p],
                                                    valueTypes: v
                                                },
                                                errors: []
                                            };
                                            let d = yield* q(a.collection, t), y = null == d ? void 0 : d[p];
                                            if (void 0 === y || void 0 === d) {
                                                let r = (null == (l = t.formulaPropertyNames) ? void 0 : l.get(p)) ? ? p;
                                                return {
                                                    node: { ...e,
                                                        type: {
                                                            type: "unknown"
                                                        },
                                                        valueTypes: v
                                                    },
                                                    errors: [{
                                                        type: i().IA.MissingPropertyOnContextVariable,
                                                        node: e,
                                                        property: r,
                                                        token: c
                                                    }]
                                                }
                                            }
                                            G(t.guaranteedPropertyIds, p, y.type);
                                            let m = yield*(0, s().Df)(p, d, y);
                                            return {
                                                node: { ...e,
                                                    type: m ? ? {
                                                        type: "unknown"
                                                    },
                                                    valueTypes: v
                                                },
                                                errors: void 0 === m ? [{
                                                    type: i().IA.BlockPropertyTypeInvalid,
                                                    node: e,
                                                    token: c,
                                                    propertyName: y.name,
                                                    propertyType: y.type
                                                }] : []
                                            }
                                        }
                                        let a = null == (n = v.find(e => e.kind === o().FormulaContextValueKind.ThisRow)) ? void 0 : n.type;
                                        if (void 0 === a) return {
                                            node: { ...e,
                                                type: {
                                                    type: "unknown"
                                                },
                                                valueTypes: v
                                            },
                                            errors: [{
                                                type: i().IA.ThisRowTypeNotFound,
                                                node: e
                                            }]
                                        };
                                        if ("block" !== a.type || void 0 === a.collection) return {
                                            node: { ...e,
                                                type: {
                                                    type: "unknown"
                                                },
                                                valueTypes: v
                                            },
                                            errors: [{
                                                type: i().IA.ThisRowNotBlockWithCollection,
                                                node: e
                                            }]
                                        };
                                        if (void 0 === c.collection) return {
                                            node: { ...e,
                                                type: o().FormulaTokenSupportedBlockSystemPropertyToType[c.property],
                                                valueTypes: v
                                            },
                                            errors: []
                                        };
                                        let y = yield* q(a.collection, t), m = (0, s().Yi)(c.property), f = null == y ? void 0 : y[m];
                                        if (void 0 === f || void 0 === y) return {
                                            node: { ...e,
                                                type: {
                                                    type: "unknown"
                                                },
                                                valueTypes: v
                                            },
                                            errors: [{
                                                type: i().IA.MissingPropertyOnThisRow,
                                                node: e,
                                                property: (null == (p = t.formulaPropertyNames) ? void 0 : p.get(m)) ? ? m
                                            }]
                                        };
                                        if (G(t.guaranteedPropertyIds, m, f.type), (0, r(9247).CH)(t.spaceId, f, y)) return {
                                            node: { ...e,
                                                type: {
                                                    type: "unknown"
                                                },
                                                valueTypes: v
                                            },
                                            errors: [{
                                                type: i().IA.CrossSpacePropertyNotSupported,
                                                node: e,
                                                property: (null == (d = t.formulaPropertyNames) ? void 0 : d.get(m)) ? ? m
                                            }]
                                        };
                                        let h = yield*(0, s().Df)(m, y, f);
                                        return {
                                            node: { ...e,
                                                type: h ? ? {
                                                    type: "unknown"
                                                },
                                                valueTypes: v
                                            },
                                            errors: void 0 === h ? [{
                                                type: i().IA.MemberPropertyTypeInvalid,
                                                node: e,
                                                token: c,
                                                propertyName: f.name,
                                                propertyType: f.type
                                            }] : []
                                        }
                                    }
                                case o().FormulaTokenType.ContextValue:
                                    {
                                        let t = null == (y = v.find(e => e.kind === o().FormulaContextValueKind.ContextValue && e.id === (0, s().GH)(c.valueId))) ? void 0 : y.type;
                                        if (void 0 === t) return {
                                            node: { ...e,
                                                type: {
                                                    type: "unknown"
                                                },
                                                valueTypes: v
                                            },
                                            errors: [{
                                                type: i().IA.MissingContextVariable,
                                                node: e,
                                                token: c
                                            }]
                                        };
                                        return {
                                            node: { ...e,
                                                type: t,
                                                valueTypes: v
                                            },
                                            errors: []
                                        }
                                    }
                                case o().FormulaTokenType.Block:
                                    {
                                        let t = {
                                                table: r(682956).ev,
                                                id: c.blockId,
                                                spaceId: c.spaceId
                                            },
                                            n = (yield {
                                                recordPointers: [t]
                                            }).getRecordModel(t);
                                        if (void 0 === n) return {
                                            node: { ...e,
                                                type: {
                                                    type: "unknown"
                                                },
                                                valueTypes: v
                                            },
                                            errors: [{
                                                type: i().IA.MissingBlock,
                                                node: e,
                                                token: c
                                            }]
                                        };
                                        let a = n.getParentPointer(),
                                            o = a.table === r(46241).V ? a : void 0;
                                        return {
                                            node: { ...e,
                                                type: {
                                                    type: "block",
                                                    collection: o
                                                },
                                                valueTypes: v
                                            },
                                            errors: []
                                        }
                                    }
                                case o().FormulaTokenType.Person:
                                    return {
                                        node: { ...e,
                                            type: {
                                                type: "person"
                                            },
                                            valueTypes: v
                                        },
                                        errors: []
                                    };
                                case o().FormulaTokenType.Date:
                                    return {
                                        node: { ...e,
                                            type: {
                                                type: "date"
                                            },
                                            valueTypes: v
                                        },
                                        errors: []
                                    };
                                default:
                                    return (0, a().HB)(c)
                            }
                        }
                    case i().NM.Array:
                        {
                            let n = yield*(0, r(30192).KZ)(e.elements.map(e => V(e, t))), a = {
                                type: "unknown"
                            };
                            if (n.length > 0) {
                                a = n[0].node.type;
                                for (let e = 1; e < n.length; e++)
                                    if (!(0, s().Re)(a, n[e].node.type)) {
                                        a = {
                                            type: "unknown"
                                        };
                                        break
                                    }
                            }
                            return {
                                node: { ...e,
                                    elements: n.map(e => e.node),
                                    type: {
                                        type: "array",
                                        of: a
                                    },
                                    valueTypes: v
                                },
                                errors: n.flatMap(e => e.errors)
                            }
                        }
                    case i().NM.Identifier:
                        {
                            let t = null == (c = v.find(t => t.kind === o().FormulaContextValueKind.Binding && t.id === e.text)) ? void 0 : c.type;
                            if (void 0 !== t) return {
                                node: { ...e,
                                    type: t,
                                    valueTypes: v
                                },
                                errors: []
                            };
                            let n = r(137938).LP.hasOwnProperty(e.text) ? r(137938).LP[e.text] : void 0;
                            if (void 0 === n) {
                                let t = [{
                                    type: i().IA.UndefinedIdentifier,
                                    node: e
                                }];
                                return r(859848).sr.hasOwnProperty(e.text) ? t.push({
                                    type: i().IA.RenamedIdentifier,
                                    node: e,
                                    identifier: e.text,
                                    renamedTo: r(859848).sr[e.text]
                                }) : r(859848).lg.hasOwnProperty(e.text) && t.push({
                                    type: i().IA.RemovedFunction,
                                    node: e,
                                    functionName: e.text,
                                    alternative: r(859848).lg[e.text]
                                }), {
                                    node: { ...e,
                                        type: {
                                            type: "unknown"
                                        },
                                        valueTypes: v
                                    },
                                    errors: t
                                }
                            }
                            return {
                                node: { ...e,
                                    type: {
                                        type: "function",
                                        libraryFunction: n,
                                        calledFromUnifiedFunctionProperty: !1
                                    },
                                    valueTypes: v
                                },
                                errors: []
                            }
                        }
                    case i().NM.Conditional:
                        {
                            let r = yield* V(e.condition, t), n = yield* V(e.expIfTrue, t), a = void 0 !== e.expIfFalse ? yield* V(e.expIfFalse, t): void 0, o = (0, s().qk)(n.node.type, null == a ? void 0 : a.node.type);
                            return {
                                node: { ...e,
                                    condition: r.node,
                                    expIfTrue: n.node,
                                    expIfFalse: null == a ? void 0 : a.node,
                                    type: o,
                                    valueTypes: v
                                },
                                errors: [...r.errors, ...n.errors ? ? [], ...(null == a ? void 0 : a.errors) ? ? []]
                            }
                        }
                    case i().NM.LogicalOr:
                    case i().NM.LogicalAnd:
                        let x = yield*(0, r(30192).KZ)(e.elements.map(e => V(e, t))), b = x.flatMap(e => e.errors);
                        return {
                            node: { ...e,
                                elements: x.map(e => e.node),
                                type: {
                                    type: "checkbox"
                                },
                                valueTypes: v
                            },
                            errors: b
                        };
                    case i().NM.Equality:
                    case i().NM.Relational:
                        {
                            let r = yield* V(e.lhs, t), n = yield* V(e.rhs, t), a = [...r.errors, ...n.errors];
                            if (e.kind === i().NM.Relational) {
                                let t = r.node.type,
                                    o = n.node.type;
                                "unknown" === t.type || "unknown" === o.type || t.type === o.type && ["number", "date", "text", "checkbox"].includes(t.type) || a.push({
                                    type: i().IA.CannotRelativelyCompareTypes,
                                    node: e,
                                    lhsType: t,
                                    rhsType: o
                                })
                            }
                            return {
                                node: { ...e,
                                    lhs: r.node,
                                    rhs: n.node,
                                    type: {
                                        type: "checkbox"
                                    },
                                    valueTypes: v
                                },
                                errors: a
                            }
                        }
                    case i().NM.Additive:
                    case i().NM.Multiplicative:
                    case i().NM.Exponentiation:
                        {
                            let r = yield* V(e.lhs, t), n = yield* V(e.rhs, t), a = [...r.errors, ...n.errors];
                            if ("+" === e.op) {
                                if ("number" === r.node.type.type && "number" === n.node.type.type) return {
                                    node: { ...e,
                                        lhs: r.node,
                                        rhs: n.node,
                                        type: {
                                            type: "number"
                                        },
                                        valueTypes: v
                                    },
                                    errors: a
                                };
                                return {
                                    node: { ...e,
                                        lhs: r.node,
                                        rhs: n.node,
                                        type: ["unknown", "number"].includes(r.node.type.type) && ["unknown", "number"].includes(n.node.type.type ? ? "unknown") ? {
                                            type: "unknown"
                                        } : {
                                            type: "text"
                                        },
                                        valueTypes: v
                                    },
                                    errors: a
                                }
                            }
                            let o = function(e, t, r) {
                                let n = t.type,
                                    a = (null == r ? void 0 : r.type) ? ? {
                                        type: "unknown"
                                    };
                                if (!["unknown", "number"].includes(n.type) || !["unknown", "number"].includes(a.type)) return {
                                    type: i().IA.CannotDoMathOnType,
                                    node: e,
                                    lhsType: n,
                                    rhsType: a
                                }
                            }(e, r.node, n.node);
                            return void 0 !== o && a.push(o),
                            {
                                node: { ...e,
                                    lhs: r.node,
                                    rhs: n.node,
                                    type: {
                                        type: "number"
                                    },
                                    valueTypes: v
                                },
                                errors: a
                            }
                        }
                    case i().NM.Unary:
                        {
                            let r, n = yield* V(e.expression, t), o = [...n.errors];
                            switch (e.op) {
                                case "-":
                                    ["number", "unknown"].includes(n.node.type.type) || o.push({
                                        type: i().IA.UnaryMinusOnNonNumber,
                                        node: e,
                                        expression: n.node
                                    }), r = {
                                        type: "number"
                                    };
                                    break;
                                case "!":
                                case "not":
                                    r = {
                                        type: "checkbox"
                                    };
                                    break;
                                default:
                                    (0, a().HB)(e)
                            }
                            return {
                                node: { ...e,
                                    expression: n.node,
                                    type: r,
                                    valueTypes: v
                                },
                                errors: o
                            }
                        }
                    case i().NM.Call:
                        {
                            let {
                                node: n,
                                errors: a
                            } = yield* V(e.expression, t),
                            u = [...a];
                            if (n.kind === i().NM.Identifier && ("lets" === n.text || "let" === n.text)) return yield* function*(e, t, r) {
                                let n = [],
                                    a = [...r.valueTypes],
                                    s = [];
                                for (let t = 0; t < e.arguments.length - 1; t += 2) {
                                    let u = e.arguments[t],
                                        l = e.arguments[t + 1];
                                    if (u.kind !== i().NM.Identifier) {
                                        s.push({
                                            type: i().IA.IdentifierExpected,
                                            node: u
                                        });
                                        continue
                                    }
                                    let {
                                        node: p,
                                        errors: d
                                    } = yield* V(l, { ...r,
                                        valueTypes: a
                                    });
                                    n[t + 1] = p, s.push(...d);
                                    let y = u.text;
                                    a = [{
                                        kind: o().FormulaContextValueKind.Binding,
                                        id: y,
                                        name: y,
                                        type: p.type
                                    }, ...a], n[t] = { ...u,
                                        type: p.type,
                                        valueTypes: a
                                    }
                                }
                                let u = e.arguments[e.arguments.length - 1];
                                if (!u) return {
                                    node: { ...e,
                                        expression: t,
                                        arguments: n,
                                        type: {
                                            type: "unknown"
                                        },
                                        valueTypes: a
                                    },
                                    errors: s
                                };
                                let {
                                    node: l,
                                    errors: p
                                } = yield* V(u, { ...r,
                                    valueTypes: a
                                });
                                return n[e.arguments.length - 1] = l, s.push(...p), {
                                    node: { ...e,
                                        expression: t,
                                        arguments: n,
                                        type: l.type,
                                        valueTypes: a
                                    },
                                    errors: s
                                }
                            }(e, n, t);
                            ["function", "unknown"].includes(n.type.type) || u.push({
                                type: i().IA.CallingNotFunction,
                                node: e,
                                callee: n
                            });
                            let l = "function" === n.type.type ? n.type.libraryFunction : void 0,
                                p = "function" === n.type.type ? n.type.boundTargetType : void 0;
                            if (void 0 !== l) {
                                null != (f = t.featureGates) && null != (f = f.formulas_disabled_functions) && f.includes(l.name) && u.push({
                                    type: i().IA.UnifiedFunctionCannotFindFunction,
                                    node: e,
                                    name: l.name
                                });
                                let r = (0, s().ab)(l),
                                    a = e.arguments.length + +(void 0 !== p);
                                a < r && ("function" === n.type.type && n.type.calledFromUnifiedFunctionProperty ? u.push({
                                    type: i().IA.FunctionCallTooFewArguments,
                                    node: e,
                                    libraryFunction: l,
                                    numArguments: a - 1,
                                    minNumParameters: r - 1
                                }) : u.push({
                                    type: i().IA.FunctionCallTooFewArguments,
                                    node: e,
                                    libraryFunction: l,
                                    numArguments: a,
                                    minNumParameters: r
                                }))
                            }
                            let d = [],
                                y = [];void 0 !== p && y.push(p);
                            for (let r = 0; r < e.arguments.length; r++) {
                                let n = e.arguments[r],
                                    a = void 0 !== p ? r + 1 : r,
                                    c = void 0 !== l ? (0, s().Pf)(l, a) : void 0;
                                if (void 0 !== l && void 0 === c && u.push({
                                        type: i().IA.FunctionCallUnexpectedArgument,
                                        node: e,
                                        libraryFunction: l,
                                        argument: n,
                                        parameterIndex: a
                                    }), (null == c ? void 0 : c.augmentScope) !== void 0) {
                                    let e = d.map(e => (null == e ? void 0 : e.type) ? ? {
                                            type: "unknown"
                                        }),
                                        a = c.augmentScope(void 0 !== p ? [p, ...e] : e),
                                        {
                                            node: i,
                                            errors: s
                                        } = yield* V(n, { ...t,
                                            valueTypes: [...Object.entries(a).map(([e, t]) => ({
                                                kind: o().FormulaContextValueKind.Binding,
                                                id: e,
                                                type: t
                                            })), ...v]
                                        });
                                    d[r] = i, y.push(i.type), u.push(...s)
                                } else {
                                    let {
                                        node: o,
                                        errors: p
                                    } = yield* V(n, { ...t
                                    });
                                    if (d[r] = o, void 0 !== l && void 0 !== c)
                                        if ("unknown" === o.type.type && (0, s().nF)(c.type)) y.push(o.type), t.featureGates.formula_null_check && u.push({
                                            type: i().IA.CallingFunctionWithUnknownArgument,
                                            node: e,
                                            libraryFunction: l,
                                            expectedParameter: c,
                                            parameterIndex: a
                                        });
                                        else {
                                            let t = "id" === l.name && "block" === o.type.type || (0, s().CM)(o.type, c.type);
                                            "boolean" == typeof t ? (y.push(o.type), t || u.push({
                                                type: i().IA.FunctionCallArgumentWrongType,
                                                node: e,
                                                libraryFunction: l,
                                                argument: o,
                                                expectedParameter: c
                                            })) : y.push(t)
                                        }
                                    else y.push(o.type);
                                    u.push(...p)
                                }
                            }
                            if (void 0 !== l && null != (m = t.featureGates) && m.formulas_block_unsafe_regex && ("test" === l.name || "match" === l.name || "replace" === l.name || "replaceAll" === l.name)) {
                                let t = +(void 0 === p),
                                    n = e.arguments[t];
                                if ((null == n ? void 0 : n.kind) === i().NM.String) {
                                    let e = (0, r(899666).Y)(n.text);
                                    void 0 !== e && u.push({
                                        type: i().IA.UnsafeRegexPattern,
                                        node: n,
                                        pattern: n.text,
                                        functionName: l.name,
                                        reason: e
                                    })
                                }
                            }
                            let c = u;
                            for (let t of U)
                                if (n.kind === i().NM.Identifier && n.text === t.name && 1 === e.arguments.length && e.arguments[0].kind === i().NM.String && e.arguments[0].text.length > 0) {
                                    let r = e.arguments[0].text.replace(o().FORMULA_TOKEN_REGEX, "");
                                    (c = c.filter(e => e.type !== i().IA.UndefinedIdentifier || e.node.kind !== i().NM.Identifier || e.node.text !== t.name)).push({
                                        type: t.error,
                                        node: e,
                                        name: r
                                    });
                                    break
                                }
                            if (n.kind === i().NM.UnifiedFunctionProperty) {
                                for (let t of U)
                                    if (n.name === t.name && 1 === e.arguments.length && e.arguments[0].kind === i().NM.String && e.arguments[0].text.length > 0) {
                                        let r = e.arguments[0].text.replace(o().FORMULA_TOKEN_REGEX, "");
                                        (c = c.filter(e => e.type !== i().IA.UnifiedFunctionCannotFindFunction || e.node.kind !== i().NM.UnifiedFunctionProperty || e.node.name !== t.name)).push({
                                            type: t.error,
                                            node: e,
                                            name: r
                                        });
                                        break
                                    }
                            }
                            return {
                                node: { ...e,
                                    expression: n,
                                    arguments: d,
                                    type: void 0 !== l ? "function" == typeof l.returnType ? l.returnType(y) : l.returnType : {
                                        type: "unknown"
                                    },
                                    valueTypes: v
                                },
                                errors: c
                            }
                        }
                    case i().NM.UnifiedFunctionProperty:
                        {
                            let n = r(137938).LP.hasOwnProperty(e.name) ? r(137938).LP[e.name] : void 0,
                                {
                                    node: a,
                                    errors: o
                                } = yield* V(e.expression, t), u = [...o], l = {
                                    type: "unknown"
                                };
                            if (void 0 === n) u.push({
                                type: i().IA.UnifiedFunctionCannotFindFunction,
                                node: e,
                                name: e.name
                            });
                            else {
                                let r = (0, s().Pf)(n, 0);
                                if (void 0 === r) u.push({
                                    type: i().IA.UnifiedFunctionNoArguments,
                                    node: e,
                                    libraryFunction: n
                                });
                                else if ("unknown" === a.type.type && (0, s().nF)(r.type)) t.featureGates.formula_null_check && u.push({
                                    type: i().IA.CallingFunctionWithUnknownTarget,
                                    node: e,
                                    libraryFunction: n,
                                    expectedParameter: r
                                });
                                else {
                                    let t = "id" === n.name && "block" === a.type.type || (0, s().CM)(a.type, r.type);
                                    "boolean" == typeof t ? (l = a.type, t || u.push({
                                        type: i().IA.UnifiedFunctionTargetWrongType,
                                        node: e,
                                        expression: a,
                                        libraryFunction: n
                                    })) : l = t
                                }
                            }
                            return {
                                node: { ...e,
                                    expression: a,
                                    type: void 0 !== n ? {
                                        type: "function",
                                        boundTargetType: l,
                                        libraryFunction: n,
                                        calledFromUnifiedFunctionProperty: !0
                                    } : {
                                        type: "unknown"
                                    },
                                    valueTypes: v
                                },
                                errors: u
                            }
                        }
                    case i().NM.MemberBlockProperty:
                        {
                            let n, {
                                node: a,
                                errors: u
                            } = yield* V(e.expression, t), l = [...u];
                            if ("block" === a.type.type)
                                if (void 0 === e.propertyToken.collection) n = o().FormulaTokenSupportedBlockSystemPropertyToType[e.propertyToken.property];
                                else {
                                    let o = yield* q(e.propertyToken.collection, t), u = (0, s().Yi)(e.propertyToken.property), p = null == o ? void 0 : o[u];
                                    if (p && G(t.guaranteedPropertyIds, u, p.type), void 0 === p || void 0 === o) l.push({
                                        type: i().IA.MemberPropertyMissing,
                                        node: e,
                                        property: (null == (h = t.formulaPropertyNames) ? void 0 : h[u]) ? ? u
                                    });
                                    else if (void 0 !== a.type.collection)
                                        if ((0, r(9247).CH)(t.spaceId, p, o) && l.push({
                                                type: i().IA.CrossSpacePropertyNotSupported,
                                                node: e,
                                                property: (null == (g = t.formulaPropertyNames) ? void 0 : g.get(u)) ? ? u
                                            }), (0, r(496282).Z2)(e.propertyToken.collection, a.type.collection)) {
                                            let t = yield*(0, s().Df)(u, o, p);
                                            n = t, void 0 === t && l.push({
                                                type: i().IA.MemberPropertyTypeInvalid,
                                                node: e,
                                                token: e.propertyToken,
                                                propertyName: p.name,
                                                propertyType: p.type
                                            })
                                        } else l.push({
                                            type: i().IA.MemberPropertyMismatchCollection,
                                            node: e,
                                            token: e.propertyToken
                                        })
                                }
                            else "unknown" !== a.type.type && l.push({
                                type: i().IA.MemberPropertyTargetNotBlock,
                                node: e,
                                expression: a
                            });
                            return {
                                node: { ...e,
                                    expression: a,
                                    type: n ? ? {
                                        type: "unknown"
                                    },
                                    valueTypes: v
                                },
                                errors: l
                            }
                        }
                    case i().NM.RecoveryNode:
                        return {
                            node: { ...e,
                                type: {
                                    type: "unknown"
                                },
                                valueTypes: v
                            },
                            errors: []
                        };
                    default:
                        (0, a().HB)(e)
                }
            }

            function $(e, t) {
                return t.some(t => (function e(t, r) {
                    return "array" !== t.type ? t.type === r.type : "array" === r.type && ("array" === t.of.type ? e(t.of, r) : e(t.of, r.of))
                })(e, t))
            }

            function W(e) {
                let t = [],
                    r = [];
                for (let n of e) n.type === i().IA.CalledFunctionOnEmptyValue || n.type === i().IA.CallingFunctionWithUnknownTarget || n.type === i().IA.CallingFunctionWithUnknownArgument ? r.push(n) : t.push(n);
                return {
                    errors: t,
                    warnings: r
                }
            }
            async function H(e, t, a) {
                let o = V(e, t),
                    s = o.next();
                for (; !s.done;) {
                    let e = t.handleDataRequest(s.value);
                    s = o.next((0, n().yL)(e) ? await e : e)
                }
                if (t.allowedReturnTypes && !$(s.value.node.type, t.allowedReturnTypes) && s.value.errors.push({
                        allowedReturnTypes: t.allowedReturnTypes,
                        node: s.value.node,
                        returnType: s.value.node.type,
                        type: i().IA.DisallowedReturnType
                    }), t.featureGates.formula_null_check && t.enableExistenceGuarantees && 0 === s.value.errors.length) {
                    let {
                        node: e,
                        errors: r
                    } = D(s.value.node, { ...t,
                        existenceGuarantees: u.empty()
                    });
                    s.value.node = e, s.value.errors.push(...r)
                }
                if (!a) {
                    let {
                        errors: e,
                        warnings: t
                    } = W(s.value.errors);
                    return {
                        node: s.value.node,
                        errors: e,
                        warnings: t
                    }
                }
                let l = s.value.errors.findIndex(e => e.type === i().IA.InvalidPropCall); - 1 !== l && (s.value.errors = s.value.errors.filter((e, t) => t === l || e.type !== i().IA.InvalidPropCall));
                let {
                    errors: p,
                    warnings: d
                } = W(s.value.errors.map(e => {
                    let t = (0, r(349761).zf)(e);
                    return { ...e,
                        node: (0, r(301040).TW)(t, a)
                    }
                }));
                return {
                    node: s.value.node,
                    errors: p,
                    warnings: d
                }
            }

            function z(e, t, n) {
                let a = V(e, t),
                    o = a.next();
                for (; !o.done;) {
                    let e = t.handleDataRequest(o.value);
                    o = a.next(e)
                }
                if (t.allowedReturnTypes && !$(o.value.node.type, t.allowedReturnTypes) && o.value.errors.push({
                        allowedReturnTypes: t.allowedReturnTypes,
                        node: o.value.node,
                        returnType: o.value.node.type,
                        type: i().IA.DisallowedReturnType
                    }), t.featureGates.formula_null_check && t.enableExistenceGuarantees && 0 === o.value.errors.length) {
                    let {
                        node: e,
                        errors: r
                    } = D(o.value.node, { ...t,
                        existenceGuarantees: u.empty()
                    });
                    o.value.node = e, o.value.errors.push(...r)
                }
                if (!n) {
                    let {
                        errors: e,
                        warnings: t
                    } = W(o.value.errors);
                    return {
                        node: o.value.node,
                        errors: e,
                        warnings: t
                    }
                }
                let {
                    errors: s,
                    warnings: l
                } = W(o.value.errors.map(e => {
                    let t = (0, r(349761).zf)(e);
                    return { ...e,
                        node: (0, r(301040).TW)(t, n)
                    }
                }));
                return {
                    node: o.value.node,
                    errors: s,
                    warnings: l
                }
            }
        }
    }
]);