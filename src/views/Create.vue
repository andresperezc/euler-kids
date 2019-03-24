<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md10 offset-md1 xl8 offset-xl2>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" :color="styles.color">
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2" :color="styles.color">
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3" :color="styles.color">
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 4" step="4" :color="styles.color">
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="5" :color="styles.color"> </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-layout text-xs-center row wrap justify-center>
                <v-flex xs12>
                  <div class="headline font-weight-light ">
                    What do you want to create today?
                  </div>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4
                  v-for="(activity, i) in activities"
                  :key="i"
                >
                  <Card
                    @click.native="activitySelected(activity.activity)"
                    :img="img(activity.dir, activity.img)"
                    :gradient="activity.gradient"
                    :data="activity.activity"
                  />
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-btn :color="styles.color" @click="e1 = 1" fab dark small>
                <v-icon>arrow_back</v-icon>
              </v-btn>
              <v-layout text-xs-center row wrap justify-center>
                <v-flex xs12>
                  <div class="headline font-weight-light ">
                    Select the subject
                  </div>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4
                  v-for="(subject, i) in subjects(activity)"
                  :key="i"
                >
                  <Card
                    @click.native="subjectSelected(subject.subject)"
                    :img="img(subject.dir, subject.img)"
                    :gradient="subject.gradient"
                    :data="subject.subject"
                  />
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-btn :color="styles.color" @click="e1 = 2" fab dark small>
                <v-icon>arrow_back</v-icon>
              </v-btn>
              <v-layout text-xs-center row wrap justify-center>
                <v-flex xs12>
                  <div class="headline font-weight-light ">
                    Select the grade
                  </div>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4
                  v-for="(grade, i) in grades(activity, subject)"
                  :key="i"
                >
                  <Card
                    @click.native="gradeSelected(grade.grade)"
                    :img="img(grade.dir, grade.img)"
                    :gradient="grade.gradient"
                    :data="grade.grade"
                  />
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-btn :color="styles.color" @click="e1 = 3" fab dark small>
                <v-icon>arrow_back</v-icon>
              </v-btn>
              <v-layout text-xs-center row wrap justify-center>
                <v-flex xs12>
                  <div class="headline font-weight-light ">Select the game</div>
                </v-flex>
                <v-layout row wrap>
                  <!-- v-if Para resetear el filtro de topics-->
                  <v-flex v-if="e1 === 4" xs12 sm3>
                    <v-card class="grey lighten-4">
                      <v-item-group>
                        <v-container>
                          <v-layout row wrap>
                            <v-flex
                              d-flex
                              xs12
                              v-for="topic in topics(activity, subject, grade)"
                              :key="topic.topic"
                            >
                              <v-item>
                                <v-card
                                  slot-scope="{ active, toggle }"
                                  :color="active ? styles.green : styles.color"
                                  dark
                                  tile
                                  flat
                                  hover
                                  ripple
                                  @click="toggle"
                                >
                                  <v-card-text
                                    class="subheading font-weight-light"
                                  >
                                    {{ topic.topic }}
                                  </v-card-text>
                                  <div v-if="active">
                                    <span v-show="nope">
                                      {{ topicSelector(topic.topic) }}
                                    </span>
                                  </div>
                                </v-card>
                              </v-item>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-item-group>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex xs12 sm9>
                    <v-card class="grey lighten-4" tile flat>
                      <v-layout>
                        <v-flex xs12>
                          <v-container grid-list-sm fluid>
                            <v-layout row wrap>
                              <v-flex
                                xs12
                                v-for="(game, i) in games(
                                  activity,
                                  subject,
                                  grade
                                ).filter(topicFilter)"
                                :key="i"
                              >
                                <div
                                  class="title font-weight-light my-2 text-xs-left"
                                >
                                  {{ game.topic }}
                                </div>
                                <v-layout row wrap>
                                  <v-flex
                                    v-for="gamex in game.games"
                                    :key="gamex.game"
                                    xs12
                                    sm6
                                  >
                                    <v-card
                                      tile
                                      flat
                                      hover
                                      ripple
                                      :class="gamex.gradient"
                                      @click.native="gameSelected(gamex)"
                                    >
                                      <v-container fluid grid-list-lg>
                                        <v-layout>
                                          <v-flex>
                                            <v-img
                                              :src="img(gamex.dir, gamex.img)"
                                              height="100px"
                                              contain
                                            >
                                              <v-layout
                                                slot="placeholder"
                                                fill-height
                                                align-center
                                                justify-center
                                                ma-0
                                              >
                                                <v-progress-circular
                                                  indeterminate
                                                  color="grey lighten-5"
                                                ></v-progress-circular>
                                              </v-layout>
                                            </v-img>
                                          </v-flex>
                                        </v-layout>
                                      </v-container>
                                    </v-card>
                                  </v-flex>
                                </v-layout>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="5" v-if="finalGame">
              <v-btn :color="styles.color" @click="e1 = 4" fab dark small>
                <v-icon>arrow_back</v-icon>
              </v-btn>
              <v-layout row wrap>
                <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
                  <v-card flat class="grey lighten-4">
                    <form>
                      <v-container>
                        <v-layout wrap>
                          <v-flex xs12>
                            <div
                              class="headline font-weight-light text-xs-center"
                            >
                              {{ activity }}
                            </div>
                            <v-flex xs8 offset-xs2>
                              <v-card tile flat :class="finalGame.gradient">
                                <v-container fluid grid-list-lg>
                                  <v-layout>
                                    <v-flex xs12 md6 offset-md3>
                                      <v-img
                                        v-if="!spinner"
                                        :src="img(finalGame.dir, finalGame.img)"
                                        height="100px"
                                        contain
                                      >
                                        <v-layout
                                          slot="placeholder"
                                          fill-height
                                          align-center
                                          justify-center
                                          ma-0
                                        >
                                          <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                          ></v-progress-circular>
                                        </v-layout>
                                      </v-img>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-card>
                              <Spinner
                                v-if="spinner"
                                class="mb-2"
                                :color="styles.color"
                                :size="size"
                                :width="width"
                              />
                            </v-flex>
                          </v-flex>
                          <v-flex xs12 sm6 offset-sm3>
                            <v-radio-group
                              v-model="gameMode"
                              :mandatory="false"
                            >
                              <v-img
                                contain
                                height="100px"
                                :src="
                                  img(
                                    classroomRushImg.dir,
                                    classroomRushImg.img
                                  )
                                "
                              ></v-img>
                              <v-radio
                                :color="styles.color"
                                label="The player with more points wins"
                                value="Classroom Rush"
                              ></v-radio>
                              <v-img
                                contain
                                height="100px"
                                :src="img(rocketRaceImg.dir, rocketRaceImg.img)"
                              ></v-img>
                              <v-radio
                                :color="styles.color"
                                label="The player who first crosses the line wins"
                                value="Rocket Race"
                              ></v-radio>
                              <v-img
                                contain
                                height="100px"
                                :src="
                                  img(spaceBattleImg.dir, spaceBattleImg.img)
                                "
                              ></v-img>
                              <v-radio
                                :color="styles.color"
                                label="The team with more points wins"
                                value="Space Battle"
                              ></v-radio>
                            </v-radio-group>
                          </v-flex>
                          <v-flex xs12>
                            <v-form ref="form" v-model="valid" lazy-validation>
                              <v-layout row wrap>
                                <v-flex xs12 sm6>
                                  <v-select
                                    outline
                                    :items="times"
                                    v-model="timeSelected"
                                    :rules="totalTimeRules"
                                    label="Total time"
                                    required
                                  >
                                  </v-select>
                                </v-flex>
                                <v-flex xs12 sm6>
                                  <v-select
                                    outline
                                    :items="questionTimes"
                                    v-model="timePerQuestionSelected"
                                    :rules="questionTimeRules"
                                    label="Time per question"
                                    required
                                  >
                                  </v-select>
                                </v-flex>
                                <v-flex v-if="rocketRace" xs12 sm6>
                                  <v-select
                                    outline
                                    :items="rocketCorrectAnswers"
                                    v-model="correctAnswersToWin"
                                    :rules="rocketCorrectRules"
                                    label="Correct answers to win"
                                    required
                                  >
                                  </v-select>
                                </v-flex>
                                <v-flex v-if="spaceBattle" xs12 sm6>
                                  <v-text-field
                                    outline
                                    :rules="spaceBattleRules"
                                    v-model="teamRed"
                                    label="Red team name"
                                    required
                                  ></v-text-field>
                                </v-flex>
                                <v-flex v-if="spaceBattle" xs12 sm6>
                                  <v-text-field
                                    outline
                                    :rules="spaceBattleRules"
                                    v-model="teamBlue"
                                    label="Blue team name"
                                    required
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-form>
                          </v-flex>
                        </v-layout>
                        <v-card-actions>
                          <v-btn
                            :disabled="disabled"
                            :dark="!disabled"
                            :color="styles.red"
                            @click="createGame"
                          >
                            Create
                          </v-btn>
                        </v-card-actions>
                      </v-container>
                    </form>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
const Card = () => import("../components/Cards/CardImgNoRoute");
const Spinner = () => import("../components/Spinners/Spinner");
import get from "lodash.get";
export default {
  name: "Create",
  components: {
    Card,
    Spinner
  },
  sockets: {
    goToRoomPong(room) {
      this.spinner = false;
      this.$store.commit("gamesCreatedPush", {
        room: room,
        creator: true,
        settings: this.gameSettings // atributo necesario para startGame if (room && settings)
      });
      this.$store.commit("gameNicknameAssigner", "CreatorOfRoom@1234567890");
      return this.$router.push({ path: `/lobby/${room}` });
    }
  },
  data() {
    return {
      e1: 0,
      nope: false,
      ok: true,
      spinner: false,
      size: 60,
      width: 2,
      gameMode: "Classroom Rush",
      classroomRushImg: {
        dir: "Games",
        img: "classroomRush"
      },
      rocketRaceImg: {
        dir: "Games",
        img: "rocketRace"
      },
      spaceBattleImg: {
        dir: "Games",
        img: "spaceBattle"
      },
      whateverDir: "Games",
      whateverx: "classroomRush",
      valid: true,
      totalTimeRules: [v => !!v || "This field is required"],
      questionTimeRules: [v => !!v || "This field is required"],
      rocketCorrectRules: [v => !!v || "This field is required"],
      spaceBattleRules: [v => !!v || "This field is required"],
      activities: [
        {
          dir: "Activities",
          img: "play",
          gradient: "grad2",
          activity: "Play"
        }
        // {
        //   dir: "Activities",
        //   img: "second",
        //   gradient: "grad3",
        //   activity: "Assignment"
        // }
      ],
      times: [
        {
          text: "1 min"
        },
        {
          text: "2 min"
        },
        {
          text: "3 min"
        },
        {
          text: "4 min"
        },
        {
          text: "5 min"
        }
      ],
      questionTimes: [
        {
          text: "10 sec"
        },
        {
          text: "15 sec"
        },
        {
          text: "20 sec"
        },
        {
          text: "30 sec"
        },
        {
          text: "Unlimited"
        }
      ],
      rocketCorrectAnswers: [10, 15, 20, 25, 30, 40, 50],
      correctAnswersToWin: null,
      activity: null,
      subject: null,
      grade: null,
      topic: null,
      game: null,
      finalGame: null,
      timeSelected: null,
      timePerQuestionSelected: null,
      teamRed: null,
      teamBlue: null,
      Play: {
        subjects: [
          {
            subject: "Mental math",
            dir: "Subjects",
            img: "math",
            gradient: "grad2"
          }
          // {
          //   subject: "IQ skills",
          //   dir: "Subjects",
          //   img: "language",
          //   gradient: "grad2"
          // }
        ],
        "Mental math": {
          grades: [
            {
              dir: "Grades",
              img: "first",
              gradient: "grad2",
              grade: "First grade"
            },
            {
              dir: "Grades",
              img: "second",
              gradient: "grad2",
              grade: "Second grade"
            },
            {
              dir: "Grades",
              img: "third",
              gradient: "grad2",
              grade: "Third grade"
            },
            {
              dir: "Grades",
              img: "fourth",
              gradient: "grad2",
              grade: "Fourth grade"
            },
            {
              dir: "Grades",
              img: "fifth",
              gradient: "grad2",
              grade: "Fifth grade"
            },
            {
              dir: "Grades",
              img: "sixth",
              gradient: "grad2",
              grade: "Sixth grade"
            }
          ],
          "First grade": {
            topics: [
              {
                topic: "All games"
              },
              {
                topic: "Addition strategies"
              },
              {
                topic: "Subtraction strategies"
              },
              {
                topic: "Additions"
              },
              {
                topic: "Subtractions"
              },
              {
                topic: "Mixed operations"
              }
            ],
            games: [
              {
                topic: "Addition strategies",
                games: [
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus11",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-one-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus21",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-two-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus31",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-three-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus41",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-four-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus51",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-five-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus61",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-six-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus71",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-seven-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus81",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-eight-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus91",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-nine-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumPlus101",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "one-digit-numbers-plus-ten-first-grade"
                  }
                ]
              },
              {
                topic: "Subtraction strategies",
                games: [
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumMinus11",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game: "one-digit-number-minus-one-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumMinus21",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game: "one-digit-number-minus-two-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumMinus31",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game: "one-digit-number-minus-three-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitNumMinus41",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game: "one-digit-number-minus-four-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "2DigitNumMinus51",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game: "two-digit-number-minus-five-up-to-twenty-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "2DigitNumMinus61",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game: "two-digit-number-minus-six-up-to-twenty-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "2DigitNumMinus71",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game:
                      "two-digit-number-minus-seven-up-to-twenty-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "2DigitNumMinus81",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game:
                      "two-digit-number-minus-eight-up-to-twenty-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "2DigitNumMinus91",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game: "two-digit-number-minus-nine-up-to-twenty-first-grade"
                  }
                ]
              },
              {
                topic: "Additions",
                games: [
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitAdd1",
                    gradient: "grad2",
                    topic: "Additions",
                    game: "one-digit-additions-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "findNum1DigitAdd1",
                    gradient: "grad2",
                    topic: "Additions",
                    game:
                      "find-the-missing-number-one-digit-additions-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitAddDoubles1",
                    gradient: "grad2",
                    topic: "Additions",
                    game: "one-digit-additions-doubles-first-grade"
                  }
                ]
              },
              {
                topic: "Subtractions",
                games: [
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitSubt1",
                    gradient: "grad2",
                    topic: "Subtractions",
                    game: "one-digit-subtractions-first-grade"
                  },
                  {
                    dir: "Games/firstGrade/math",
                    img: "findNum1DigitSubt1",
                    gradient: "grad2",
                    topic: "Subtractions",
                    game:
                      "find-the-missing-number-one-digit-subtractions-first-grade"
                  }
                ]
              },
              {
                topic: "Mixed operations",
                games: [
                  {
                    dir: "Games/firstGrade/math",
                    img: "1DigitAdd&SubtUp201",
                    gradient: "grad2",
                    topic: "Mixed operations",
                    game:
                      "one-digit-additions-and-subtractions-up-to-twenty-first-grade"
                  }
                ]
              }
            ]
          },
          "Second grade": {
            topics: [
              {
                topic: "All games"
              },
              {
                topic: "Subtraction strategies"
              },
              {
                topic: "Additions"
              },
              {
                topic: "Subtractions"
              },
              {
                topic: "Multiplications"
              },
              {
                topic: "Mixed operations"
              }
            ],
            games: [
              {
                topic: "Subtraction strategies",
                games: [
                  {
                    dir: "Games/secondGrade/math",
                    img: "subtMinu20Doubles2",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game:
                      "subtractions-with-minuends-up-to-twenty-doubles-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "subtMinu20NearDoubles2",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game:
                      "subtractions-with-minuends-up-to-twenty-near-doubles-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "subtMinu20Plus12",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game:
                      "subtractions-with-minuends-up-to-twenty-one-facts-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "subtMinu20Plus22",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game:
                      "subtractions-with-minuends-up-to-twenty-two-facts-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "subtMinu20Plus32",
                    gradient: "grad2",
                    topic: "Subtraction strategies",
                    game:
                      "subtractions-with-minuends-up-to-twenty-three-facts-second-grade"
                  }
                ]
              },
              {
                topic: "Additions",
                games: [
                  {
                    dir: "Games/secondGrade/math",
                    img: "findNumAdd20e2",
                    gradient: "grad2",
                    topic: "Additions",
                    game:
                      "find-the-missing-number-additions-up-to-twenty-second-grade"
                  }
                ]
              },
              {
                topic: "Subtractions",
                games: [
                  {
                    dir: "Games/secondGrade/math",
                    img: "1n2DigitSub2",
                    gradient: "grad2",
                    topic: "Subtractions",
                    game: "one-and-two-digit-subtractions-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "findNumSubt202",
                    gradient: "grad2",
                    topic: "Subtractions",
                    game:
                      "find-the-missing-number-subtractions-up-to-twenty-second-grade"
                  }
                ]
              },
              {
                topic: "Multiplications",
                games: [
                  {
                    dir: "Games/secondGrade/math",
                    img: "2TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "two-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "3TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "three-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "4TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "four-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "5TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "five-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "6TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "six-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "7TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "seven-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "8TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "eight-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "9TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "nine-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "10TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "ten-times-table-second-grade"
                  },
                  {
                    dir: "Games/secondGrade/math",
                    img: "11TimesTable2",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "eleven-times-table-second-grade"
                  }
                ]
              },
              {
                topic: "Mixed operations",
                games: [
                  {
                    dir: "Games/secondGrade/math",
                    img: "1n2DigitAddSub2",
                    gradient: "grad2",
                    topic: "Mixed operations",
                    game:
                      "one-and-two-digit-additions-and-subtraction-second-grade"
                  }
                ]
              }
            ]
          },
          "Third grade": {
            topics: [
              {
                topic: "All games"
              },
              {
                topic: "Multiplications"
              },
              {
                topic: "Divisions"
              }
            ],
            games: [
              {
                topic: "Multiplications",
                games: [
                  {
                    dir: "Games/thirdGrade/math",
                    img: "mixedTTables3",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game: "mixed-times-tables-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "findNumTtTwoEleven3",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game:
                      "find-the-missing-number-times-tables-two-five-ten-and-eleven-third-grade"
                  }
                ]
              },
              {
                topic: "Divisions",
                games: [
                  {
                    dir: "Games/thirdGrade/math",
                    img: "mixedDivTables3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "mixed-divisions-tables-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "findNumDtTwoEleven3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game:
                      "find-the-missing-number-division-tables-two-five-ten-eleven-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "2DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "two-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "3DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "three-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "4DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "four-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "5DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "five-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "6DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "six-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "7DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "seven-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "8DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "eight-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "9DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "nine-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "10DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "ten-division-table-third-grade"
                  },
                  {
                    dir: "Games/thirdGrade/math",
                    img: "11DivisionTable3",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "eleven-division-table-third-grade"
                  }
                ]
              }
            ]
          },
          "Fourth grade": {
            topics: [
              {
                topic: "All games"
              },
              {
                topic: "Addition strategies"
              },
              {
                topic: "Multiplications"
              },
              {
                topic: "Divisions"
              }
            ],
            games: [
              {
                topic: "Addition strategies",
                games: [
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusOne4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-one-ten-one-hundred-one-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusTwo4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-two-twenty-two-hundred-two-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusThree4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-three-thirty-three-hundred-three-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusFour4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-four-fourty-four-hundred-four-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusFive4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-five-fifty-five-hundred-five-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusSix4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-six-sixty-six-hundred-six-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusSeven4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-seven-seventy-seven-hundred-seven-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusEight4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-eight-eighty-eight-hundred-eight-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsPlusNine4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-plus-nine-ninety-nine-hundred-nine-thousand-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "additionFactsDoubles4",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "addition-facts-doubles-fourth-grade"
                  }
                ]
              },
              {
                topic: "Multiplications",
                games: [
                  {
                    dir: "Games/fourthGrade/math",
                    img: "findFactorMult4",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game:
                      "find-the-factor-to-complete-the-multiplication-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "multTenHTh4",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game:
                      "multiplications-by-tens-hundreds-or-thousands-fourth-grade"
                  }
                ]
              },
              {
                topic: "Divisions",
                games: [
                  {
                    dir: "Games/fourthGrade/math",
                    img: "2DigitDivTwo3Four4",
                    gradient: "grad2",
                    topic: "Divisions",
                    game:
                      "one-two-digit-divisions-by-two-three-four-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "divByTwoFive4",
                    gradient: "grad2",
                    topic: "Divisions",
                    game: "divisions-by-two-three-four-and-five-fourth-grade"
                  },
                  {
                    dir: "Games/fourthGrade/math",
                    img: "2DigitDivBy5610114",
                    gradient: "grad2",
                    topic: "Divisions",
                    game:
                      "two-digit-divisions-by-five-six-ten-eleven-fourth-grade"
                  }
                ]
              }
            ]
          },
          "Fifth grade": {
            topics: [
              {
                topic: "All games"
              },
              {
                topic: "Addition strategies"
              },
              {
                topic: "Multiplications"
              },
              {
                topic: "Decimals"
              }
            ],
            games: [
              {
                topic: "Addition strategies",
                games: [
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusTen5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-ten-one-hundred-one-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusTwenty5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-twenty-two-hundred-two-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusThirty5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-thirty-three-hundred-three-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusFourty5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-fourty-four-hundred-four-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusFifty5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-fifty-five-hundred-five-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusSixty5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-sixty-six-hundred-six-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusSeventy5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-seventy-seven-hundred-seven-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusEighty5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-eighty-eight-hundred-eight-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsDoublePlusNinety5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game:
                      "addition-facts-doubles-plus-ninety-nine-hundred-nine-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "additionfactsNearDobles5",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "addition-facts-near-doubles-fifth-grade"
                  }
                ]
              },
              {
                topic: "Multiplications",
                games: [
                  {
                    dir: "Games/fifthGrade/math",
                    img: "findNumLongMult5",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game:
                      "find-the-missing-number-long-multiplications-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "2n3NumMultByTenHTh5",
                    gradient: "grad2",
                    topic: "Multiplications",
                    game:
                      "two-and-three-digit-number-multiplications-by-ten-one-hundred-one-thousand-fifth-grade"
                  }
                ]
              },
              {
                topic: "Decimals",
                games: [
                  {
                    dir: "Games/fifthGrade/math",
                    img: "decimalAddUpThth5",
                    gradient: "grad2",
                    topic: "Decimals",
                    game: "decimal-additions-up-to-thousandths-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "decimalMultByTenHunTh5",
                    gradient: "grad2",
                    topic: "Decimals",
                    game:
                      "decimal-multiplications-by-ten-one-hundred-and-one-thousand-fifth-grade"
                  },
                  {
                    dir: "Games/fifthGrade/math",
                    img: "multDecimalsBy1DigitWhNum5",
                    gradient: "grad2",
                    topic: "Decimals",
                    game:
                      "multiply-decimals-by-one-digit-whole-numbers-fifth-grade"
                  }
                ]
              }
            ]
          },
          "Sixth grade": {
            topics: [
              {
                topic: "All games"
              },
              {
                topic: "Addition strategies"
              },
              {
                topic: "Mixed operations strategies"
              },
              {
                topic: "Equations"
              },
              {
                topic: "Divisions"
              },
              {
                topic: "Decimals"
              }
            ],
            games: [
              {
                topic: "Addition strategies",
                games: [
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionWith2Tens6",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "additions-with-two-tens-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionWith3Tens6",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "additions-with-three-tens-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionWith2Hundreds6",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "additions-with-two-hundreds-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionWith3Hundreds6",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "additions-with-three-hundreds-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionWith2Thousands6",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "additions-with-thousands-two-numbers-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionWith3Thousands6",
                    gradient: "grad2",
                    topic: "Addition strategies",
                    game: "additions-with-thousands-three-numbers-sixth-grade"
                  }
                ]
              },
              {
                topic: "Mixed operations strategies",
                games: [
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionSubtWithTens6",
                    gradient: "grad2",
                    topic: "Mixed operations strategies",
                    game: "additions-and-subtractions-with-tens-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionSubtWithHundreds6",
                    gradient: "grad2",
                    topic: "Mixed operations strategies",
                    game: "additions-and-subtractions-with-hundreds-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "additionSubtWithThousands6",
                    gradient: "grad2",
                    topic: "Mixed operations strategies",
                    game:
                      "additions-and-subtractions-with-thousands-sixth-grade"
                  }
                ]
              },
              {
                topic: "Equations",
                games: [
                  {
                    dir: "Games/sixthGrade/math",
                    img: "addSubEquat6",
                    gradient: "grad2",
                    topic: "Equations",
                    game: "addition-n-subtraction-equations-sixth-grade"
                  }
                ]
              },
              {
                topic: "Divisions",
                games: [
                  {
                    dir: "Games/sixthGrade/math",
                    img: "1DigitlongDivis6",
                    gradient: "grad2",
                    topic: "Additions",
                    game: "one-digit-long-divisions-sixth-grade"
                  }
                ]
              },
              {
                topic: "Decimals",
                games: [
                  {
                    dir: "Games/sixthGrade/math",
                    img: "shortDecimalAdd6",
                    gradient: "grad2",
                    topic: "Decimals",
                    game: "short-decimal-additions-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "shortDecimalSubt6",
                    gradient: "grad2",
                    topic: "Decimals",
                    game: "short-decimal-subtractions-sixth-grade"
                  },
                  {
                    dir: "Games/sixthGrade/math",
                    img: "shortDecimalMult6",
                    gradient: "grad2",
                    topic: "Decimals",
                    game: "short-decimal-multiplications-sixth-grade"
                  }
                ]
              }
            ]
          }
        }
        // "IQ skills": {
        //   grades: [
        //     {
        //       dir: "Grades",
        //       img: "first",
        //       gradient: "grad2",
        //       grade: "First grade"
        //     },
        //     {
        //       dir: "Grades",
        //       img: "second",
        //       gradient: "grad2",
        //       grade: "Second grade"
        //     },
        //     {
        //       dir: "Grades",
        //       img: "third",
        //       gradient: "grad2",
        //       grade: "Third grade"
        //     }
        //   ]
        // }
      },
      // Assignment: {
      //   subjects: [
      //     {
      //       subject: "Mental math",
      //       dir: "Subjects",
      //       img: "math",
      //       gradient: "grad3"
      //     },
      //     {
      //       subject: "IQ skills",
      //       dir: "Subjects",
      //       img: "language",
      //       gradient: "grad3"
      //     }
      //   ],
      //   "Mental math": {
      //     grades: [
      //       {
      //         dir: "Grades",
      //         img: "first",
      //         gradient: "grad3",
      //         grade: "First grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "second",
      //         gradient: "grad3",
      //         grade: "Second grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "third",
      //         gradient: "grad3",
      //         grade: "Third grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "fourth",
      //         gradient: "grad3",
      //         grade: "Fourth grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "fifth",
      //         gradient: "grad3",
      //         grade: "Fifth grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "sixth",
      //         gradient: "grad3",
      //         grade: "Sixth grade"
      //       }
      //     ],
      //     "First grade": {
      //       topics: [
      //         {
      //           topic: "All games"
      //         },
      //         {
      //           topic: "Additions"
      //         },
      //         {
      //           topic: "Subtractions"
      //         }
      //       ],
      //       games: [
      //         {
      //           topic: "Aditions",
      //           games: [
      //             {
      //               dir: "Games",
      //               img: "1",
      //               gradient: "grad2",
      //               topic: "Additions",
      //               game: "Addition game 1"
      //             },
      //             {
      //               dir: "Games",
      //               img: "3",
      //               gradient: "grad2",
      //               topic: "Additions",
      //               game: "Addition game 3"
      //             },
      //             {
      //               dir: "Games",
      //               img: "5",
      //               gradient: "grad2",
      //               topic: "Additions",
      //               game: "Addition game 5"
      //             }
      //           ]
      //         },
      //         {
      //           topic: "Substractions",
      //           games: [
      //             {
      //               dir: "Games",
      //               img: "7",
      //               gradient: "grad3",
      //               topic: "Subtractions",
      //               game: "Subtractions game 7"
      //             },
      //             {
      //               dir: "Games",
      //               img: "9",
      //               gradient: "grad3",
      //               topic: "Subtractions",
      //               game: "Subtractions game 9"
      //             },
      //             {
      //               dir: "Games",
      //               img: "11",
      //               gradient: "grad3",
      //               topic: "Subtractions",
      //               game: "Subtractions game 11"
      //             },
      //             {
      //               dir: "Games",
      //               img: "13",
      //               gradient: "grad3",
      //               topic: "Subtractions",
      //               game: "Subtractions game 13"
      //             }
      //           ]
      //         }
      //       ]
      //     },
      //     "Second grade": {
      //       topics: [
      //         {
      //           topic: "All games"
      //         },
      //         {
      //           topic: "Additions"
      //         },
      //         {
      //           topic: "Subtractions"
      //         },
      //         {
      //           topic: "Binominal Equations"
      //         }
      //       ]
      //     }
      //   },
      //   "IQ skills": {
      //     grades: [
      //       {
      //         dir: "Grades",
      //         img: "first",
      //         gradient: "grad3",
      //         grade: "First grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "second",
      //         gradient: "grad3",
      //         grade: "Second grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "third",
      //         gradient: "grad3",
      //         grade: "Third grade"
      //       },
      //       {
      //         dir: "Grades",
      //         img: "fourth",
      //         gradient: "grad3",
      //         grade: "Fourth grade"
      //       }
      //     ]
      //   }
      // },
      topicSelected: null
    };
  },
  methods: {
    img(dir, img) {
      return require(`@/assets/Create/${dir}/${img}.svg`);
    },
    subjects(activity) {
      switch (activity) {
        case "Play":
          return this.Play.subjects;
        case "Assignment":
          return this.Assignment.subjects;
        default:
          return [];
      }
    },
    grades(activity, subject) {
      switch (activity) {
        case "Play":
          return get(this.Play, [subject, "grades"], []);
        case "Assignment":
          return get(this.Assignment, [subject, "grades"], []);
        default:
          return [];
      }
    },
    topics(activity, subject, grade) {
      switch (activity) {
        case "Play":
          return get(this.Play, [subject, grade, "topics"], []);
        case "Assignment":
          return get(this.Assignment, [subject, grade, "topics"], []);
        default:
          return [];
      }
    },
    games(activity, subject, grade) {
      switch (activity) {
        case "Play":
          return get(this.Play, [subject, grade, "games"], []);
        case "Assignment":
          return get(this.Assignment, [subject, grade, "games"], []);
        default:
          return [];
      }
    },
    activitySelected(activity) {
      if (activity) {
        this.e1 = 2;
        this.activity = activity;
      }
    },
    subjectSelected(subject) {
      if (subject) {
        this.e1 = 3;
        this.subject = subject;
      }
    },
    gradeSelected(grade) {
      if (grade) {
        this.e1 = 4;
        this.grade = grade;
      }
    },
    topicFilter(element) {
      if (!this.topicSelected) {
        return element;
      }

      if (this.topicSelected === "All games") {
        return element;
      }

      return element.topic === this.topicSelected;
    },
    topicSelector(topicSelected) {
      this.topicSelected = topicSelected;
    },
    gameSelected(game) {
      if (game) {
        this.e1 = 5;
        this.game = game.game;
        this.topic = game.topic;
        this.finalGame = game;
      }
    },
    createGame() {
      if (this.$refs.form.validate()) {
        // Generamos el room en el servicor y lo recibimos en goToRoomPong
        this.spinner = true;
        this.$socket.emit("generateRoomPing", this.gameSettings);
      }
    }
  },
  computed: {
    ...mapState({
      authenticated: state => state.authenticated,
      styles: state => state.styles
    }),
    gameSettings() {
      return {
        activity: this.activity,
        subject: this.subject,
        grade: this.grade,
        topic: this.topic,
        game: this.finalGame,
        gameMode: this.gameMode,
        correctAnswersToWin: this.correctAnswersToWin,
        time: this.timeSelected,
        timePerQuestion: this.timePerQuestionSelected,
        teamRed: this.teamRed,
        teamBlue: this.teamBlue,
        dir: this.finalGame.dir,
        img: this.finalGame.img,
        gradient: this.finalGame.gradient
      };
    },
    disabled() {
      return !(
        this.activity &&
        this.subject &&
        this.grade &&
        this.topic &&
        this.game &&
        this.finalGame
      );
    },
    rocketRace() {
      return this.gameMode === "Rocket Race";
    },
    spaceBattle() {
      return this.gameMode === "Space Battle";
    }
  },
  watch: {
    e1(v) {
      if (v === 3) {
        this.topicSelected = "All games";
      }
    }
  }
};
</script>
